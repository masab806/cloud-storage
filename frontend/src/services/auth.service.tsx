import toast from 'react-hot-toast'
import api from '../lib/config/axios'
import type { AuthResponse, LoginFormType, SignUpFormType } from '../lib/types/type'
import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '../store/auth-store'
import { useNavigate } from 'react-router-dom'

const AuthService = () => {

    const { loginToStore } = useAuthStore()

    const useHandleSignUpRequest = () => {
        const navigate = useNavigate()
        async function HandleSignUpRequest(
            data: SignUpFormType
        ): Promise<SignUpFormType> {
            const response = await api.post('/auth/signup', data)
            return response.data
        }

        const onSuccess = (data: SignUpFormType) => {
            console.log(data)
            toast.success("Login Successful!")
            navigate('/login')
        }

        const onError = (error: any) => {
            console.log(error)
            toast.error("An Error Occured!")
        }

        return useMutation({
            mutationFn: HandleSignUpRequest,
            onSuccess: onSuccess,
            onError: onError
        })
    }

    const useHandleLoginRequest = () => {
        const navigate = useNavigate()
        async function HandleLoginRequest(
            data: LoginFormType
        ): Promise<AuthResponse> {
            const response = await api.post('/auth/login', data)
            return response.data
        }
        const onSuccess = (data: AuthResponse) => {
            console.log(data)
            toast.success("Login Successful!")
            if(data?.user && data?.token){
                loginToStore(data?.user, data?.token)
                navigate('/Home')
            }
        }

        const onError = (error: any) => {
            console.log(error)
            toast.error("An Error Occured!")
        }

        return useMutation({
            mutationFn: HandleLoginRequest,
            onSuccess: onSuccess,
            onError: onError
        })
    }

    const useHandleLogout = ()=>{
        const navigate = useNavigate()
        const {logout} = useAuthStore()

        return ()=>{
            logout()
            toast.success("Logged Out!")
            navigate('/login')
        }
    }

    return {
        useHandleSignUpRequest,
        useHandleLoginRequest,
        useHandleLogout
    }
}

export default AuthService