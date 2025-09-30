export type SignUpFormType = {
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type LoginFormType = {
    email: string,
    password: string
}

export type AuthResponse = {
    user: {
        userId: string,
        fullName: string,
        email: string
    },
    token: string
}

export enum FileCategory {
    DOCUMENT = 'document',
    IMAGE = 'image',
    MEDIA = 'media',
    OTHERS = 'others'
}

export type FileType = {
    id: Number,
    fileName: string,
    size: number,
    url: string,
    mimetype: string,
    category: FileCategory,
    owner: User
}

export type User = {
    id: Number,
    fullName: string,
    email: string,
    password: string,
    Files: FileType
}