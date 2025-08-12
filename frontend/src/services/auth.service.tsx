import toast from 'react-hot-toast'
import api from '../lib/config/axios'
import type { LoginFormType, SignUpFormType } from '../lib/types/type'
import { useMutation } from '@tanstack/react-query'

const AuthService = ()=> {
    const useHandleSignUpRequest = ()=> {
       async function HandleSignUpRequest(
            data: SignUpFormType
        ): Promise<SignUpFormType>{
            const response = await api.post('/auth/signup', data)
            return response.data
        }

        const onSuccess = (data: SignUpFormType)=>{
            console.log(data)
            toast.success("Login Successful!")
        }

        const onError = (error: any)=>{
            console.log(error)
            toast.error("An Error Occured!")
        }

        return useMutation({
            mutationFn: HandleSignUpRequest,
            onSuccess: onSuccess,
            onError: onError
        })
    }

    const useHandleLoginRequest = ()=>{
        async function HandleLoginRequest(
            data: LoginFormType
        ): Promise<LoginFormType>{
            const response = await api.post('/auth/login', data)
            return response.data
        }
        const onSuccess = (data: LoginFormType)=>{
            console.log(data)
            toast.success("Login Successful!")
        }

        const onError = (error: any)=>{
            console.log(error)
            toast.error("An Error Occured!")
        }

        return useMutation({
            mutationFn: HandleLoginRequest,
            onSuccess: onSuccess,
            onError: onError
        })
    }

    return {
        useHandleSignUpRequest,
        useHandleLoginRequest
    }
}

export default AuthService