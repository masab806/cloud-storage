import React, { type JSX } from 'react'
import Sidebar from '../../components/widgets/Sidebar'
import { ChartRadialText } from '../../components/ui/chart-radial'
import DocImg from '../../assets/icons/file-doc.svg'
import { File, Image, ImageIcon, PieChart, PieChartIcon, VideoIcon } from 'lucide-react'
import { useAuthStore } from '../../store/auth-store'
import { useFileStore } from '../../store/file-store'
import { useEffect } from 'react'
import { formatDate, formatFileSize } from '../../lib/utils'

export default function Dashboard() {
    const { files, fetchFiles, loading, fetchTotalStorage, totalStorage, groupedFiles } = useFileStore()

    const { documents, images, media, others } = groupedFiles()

    useEffect(() => {
        fetchFiles()
        fetchTotalStorage()
    }, [fetchFiles, fetchTotalStorage])


    const getLastUpdated = (files: typeof File) => {
        if (!files || files.length === 0) return "-"

        const latest = files.reduce((latest, file) => {
            const d = new Date(file.createdAt);
            return d > latest ? d : latest;
        }, new Date(0));

        return formatDate(latest);
    }

    const newFiles = files?.slice(0, 5)

    console.log(newFiles)

    const categoryStyles: Record<string, { icon: JSX.Element; bg: string }> = {
        document: {
            icon: <File className='text-white' />,
            bg: "bg-[#FF7474]"
        },
        image: {
            icon: <Image className='text-white' />,
            bg: "bg-blue-500"
        },
        videos: {
            icon: <VideoIcon className='text-white' />,
            bg: "bg-green-500"
        },
        others: {
            icon: <PieChartIcon className='text-white' />,
            bg: "bg-purple-500"
        }
    }

    return (
        <div className='p-3'>
            <div className='h-[600px] rounded-3xl grid grid-cols-2 bg-gray-100'>
                <div className='p-5'>
                    <div className='h-[200px] flex items-center justify-around bg-[#FF7474] rounded-3xl w-[500px]'>
                        <div className='w-[200px] h-[200px]'><ChartRadialText /></div>
                        <div className='mr-10'>
                            <p className='font-bold text-white text-lg'>Avaliable Storage</p>
                            <p className='text-white font-bold'>{formatFileSize(totalStorage)}/60GB</p>
                        </div>
                    </div>
                    <div>
                    </div>

                    <div className='p-2 mt-5 grid grid-cols-2 gap-10'>
                        <div className='h-[150px] p-5 rounded-3xl w-[200px] bg-white'>
                            <div className='flex items-center gap-5'>
                                <div className='w-[40px] rounded-2xl p-2 bg-[#FF7474]'><File className='text-white' /></div>
                                <p className='font-bold text-lg'>Documents</p>
                            </div>

                            <div className='mt-5'><div className='h-0.5 bg-gray-100'></div></div>
                            <div className='flex flex-col mt-3 items-center justify-center'>
                                <p className='text-sm font-bold'>Last Update</p>
                                <p className='text-xs text-gray-300 font-semibold'>{getLastUpdated(documents)}</p>
                            </div>
                        </div>
                        <div className='h-[150px] p-5 rounded-3xl w-[200px] bg-white'>
                            <div className='flex items-center gap-5'>
                                <div className='w-[40px] rounded-2xl p-2 bg-blue-500'><ImageIcon className='text-white' /></div>
                                <p className='font-bold text-lg'>Images</p>
                            </div>

                            <div className='mt-5'><div className='h-0.5 bg-gray-100'></div></div>
                            <div className='flex flex-col mt-3 items-center justify-center'>
                                <p className='text-sm font-bold'>Last Update</p>
                                <p className='text-xs text-gray-300 font-semibold'>{getLastUpdated(images)}</p>
                            </div>
                        </div>
                        <div className='h-[150px] p-5 rounded-3xl w-[200px] bg-white'>
                            <div className='flex items-center gap-5'>
                                <div className='w-[40px] rounded-2xl p-2 bg-green-500'><VideoIcon className='text-white' /></div>
                                <p className='font-bold text-lg'>Media</p>
                            </div>

                            <div className='mt-5'><div className='h-0.5 bg-gray-100'></div></div>
                            <div className='flex flex-col mt-3 items-center justify-center'>
                                <p className='text-sm font-bold'>Last Update</p>
                                <p className='text-xs text-gray-300 font-semibold'>{getLastUpdated(media)}</p>
                            </div>
                        </div>
                        <div className='h-[150px] p-5 rounded-3xl w-[200px] bg-white'>
                            <div className='flex items-center gap-5'>
                                <div className='w-[40px] rounded-2xl p-2 bg-purple-500'><PieChart className='text-white' /></div>
                                <p className='font-bold text-lg'>Others</p>
                            </div>

                            <div className='mt-5'><div className='h-0.5 bg-gray-100'></div></div>
                            <div className='flex flex-col mt-3 items-center justify-center'>
                                <p className='text-sm font-bold'>Last Update</p>
                                <p className='text-xs text-gray-300 font-semibold'>{getLastUpdated(others)}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='p-5'>
                    <div className='bg-white rounded-3xl h-full'>
                        <div className='p-5'>
                            <p className='text-xl font-bold'>Recent Uploaded Files</p>
                        </div>

                        <div>
                            <ul className='flex flex-col gap-8'>
                                {newFiles.map((file) => {
                                    const style = categoryStyles[file.category] || categoryStyles.others
                                    return (
                                        <li className='px-5 gap-3 flex items-center'>
                                            <div className={`${style.bg} w-[50px] p-2 rounded-2xl flex items-center justify-center`}>{style.icon}</div>
                                            <p className='font-bold'>{file?.fileName}</p>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}