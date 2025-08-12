import { z } from 'zod'

export const SignUpSchema = z.object({
    fullName: z.string().min(1, "Full Name Is Required!"),
    email: z.string().email("Invalid Email!"),
    password: z.string().min(5, "Password Must be 5 Characters Long!"),
    confirmPassword: z.string()
}).refine(
    (data)=> data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: "Passwords Donot Match!"
    }
)

export const LoginSchema = z.object({
    email: z.string().email().min(1, "Invalid Email Address"),
    password: z.string().min(1, "Invalid Password")
})