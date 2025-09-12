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