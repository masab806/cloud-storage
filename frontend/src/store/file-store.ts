import { create } from 'zustand'
import api from '../lib/config/axios'
import toast from 'react-hot-toast'
import type { FileType } from '../lib/types/type'
import { useAuthStore } from './auth-store'


interface FileStore {
    files: FileType[],
    loading: boolean,
    totalStorage: number,
    fetchFiles: () => Promise<File[] | undefined>,
    uploadFile: (file: File | undefined) => Promise<any>,
    downloadFile: (id: Number, filename?: string) => Promise<void>,
    groupedFiles: () => {
        documents: File[],
        images: File[],
        media: File[],
        others: File[]
    }
    getCategorySizes: () => {
        documentsSize: number,
        imagesSize: number,
        mediaSize: number,
        othersSize: number
    }

    fetchTotalStorage: () => Promise<void>
}



export const useFileStore = create<FileStore>((set, get) => ({
    files: [],
    loading: false,
    totalStorage: 0,

    fetchFiles: async () => {
        set({ loading: true })
        try {
            const token = useAuthStore.getState().token
            const response = await api.get('/file/getFiles', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const responseData = response.data

            if (responseData?.error) {
                toast.error(responseData?.error)
            } else {
                set({ files: responseData.files })
            }

        } catch (error) {
            console.log("Error While Fetching Files!", error)
        } finally {
            set({ loading: false })
        }
    },

    uploadFile: async (file: any) => {
        try {
            const token = useAuthStore.getState().token
            const formData = new FormData()
            formData.append('file', file)
            const response = await api.post('/file/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            })


            await get().fetchFiles()

            return response?.data
        } catch (error) {
            console.log("Error While Uploading File!", error)
        }
    },

    downloadFile: async (id: Number, filename = "download-file") => {
        try {
            const token = useAuthStore.getState().token
            const response = await api.get(`/file/${id}/download`, {
                responseType: 'blob',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            const blob = new Blob([response.data])

            const url = window.URL.createObjectURL(blob)

            const a = document.createElement('a')
            a.href = url
            a.download = filename
            a.click()
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.log("Error While Downloading!", error)
        }
    },

    groupedFiles: () => {
        const files = get().files
        return {
            documents: files.filter((f) => f.category === 'document'),
            images: files.filter((f) => f.category === 'image'),
            media: files.filter((f) => f.category === 'media'),
            others: files.filter((f) => f.category === 'others')
        }
    },

    getCategorySizes: () => {
        const files = get().files
        return {
            documentsSize: files.filter(f => f.category === 'document').reduce((a, f) => a + (f.size || 0), 0),
            imagesSize: files.filter(f => f.category === 'image').reduce((a, f) => a + (f.size || 0), 0),
            mediaSize: files.filter(f => f.category === 'media').reduce((a, f) => a + (f.size || 0), 0),
            othersSize: files.filter(f => f.category === 'others').reduce((a, f) => a + (f.size || 0), 0),
        }
    },

    fetchTotalStorage: async () => {
        try {
            const token = useAuthStore.getState().token
            const response = await api.get('/file/total', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            set({ totalStorage: response.data.totalSize })
        } catch (error) {
            console.log("An Error Occured! ", error)
        }
    }
}))