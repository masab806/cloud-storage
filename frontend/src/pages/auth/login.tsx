import React, { useState } from "react";
import FileImg from '../../assets/images/files.png'
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type z from "zod";
import { LoginSchema } from "../../lib/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import AuthService from "../../services/auth.service";


type LoginForm = z.infer<typeof LoginSchema>

export default function Login() {

    const [ShowPassword, setShowPassword] = useState<Boolean| null>(null)

    const {useHandleLoginRequest} = AuthService()

    const {mutate: handleLogin} = useHandleLoginRequest()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginForm>({
        resolver: zodResolver(LoginSchema)
    })


    const onFormSubmit = (data: LoginForm)=>{
        console.log("Submitted data: ", data)
        handleLogin(data)
    }

    return (
        <div className="overflow-y-hidden">
            <div className="grid lg:grid-cols-5 lg:grid-rows-5 lg:gap-4">
                <div className="col-span-2 row-span-5 bg-[#FA7275] h-screen">
                    <div className="p-8 flex items-center lg:gap-10 gap-5">
                        <div className="relative items-end flex ">
                            <div className="lg:h-18 lg:w-18 h-8 w-8 rounded-full bg-[#EA6365]"></div>
                            <div className="absolute lg:left-10 left-5 h-5 w-5 lg:h-10 lg:w-10 right-24 rounded-full bg-white"></div>
                        </div>
                        <p className="text-white font-bold lg:text-4xl font-poppins">SkyVault</p>
                    </div>

                    <div className="flex flex-col gap-5 items-center justify-center p-8">
                        <p className="lg:text-4xl font-bold text-white font-poppins">Manage Your Files The Best Way</p>
                        <p className="text-white lg:text-base text-xs font-medium font-poppins">Your ideas deserve a bigger sky. Sign up today and deploy in minutes. Scalable, Secure, Unstoppable.</p>
                    </div>
                    <div className="flex justify-center p-5"><img className="lg:h-[200px]" src={FileImg} /></div>
                </div>
                <div className="col-span-3 row-span-5 col-start-3">
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="flex items-center justify-center h-screen p-2 lg:p-0 lg:w-[600px]">
                            <div className="flex flex-col gap-5">
                                <p className="text-4xl font-bold font-poppins">Login</p>
                                <div className="lg:w-[500px] w-[180px] bg-white rounded-2xl p-3 shadow-md">
                                    <p className="text-sm font-semibold font-poppins">Email Address</p>
                                    <input {...register('email')} type="text" className="w-full outline-none text-xs" />
                                    {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
                                </div>
                                <div className="lg:w-[500px] w-[180px] bg-white rounded-2xl p-3 shadow-md">
                                    <p className="text-sm font-semibold font-poppins">Password</p>
                                    <div className="flex">
                                    <input {...register('password')} type={ShowPassword ? 'text' : 'password'} className="w-full outline-none text-xs" />
                                    <button
                                    className="w-4 h-4"
                                    onClick={()=> setShowPassword(!ShowPassword)}
                                    type="button"
                                    >
                                        {ShowPassword ? <EyeOff/> : <Eye/>}
                                    </button>
                                    </div>
                                    {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
                                </div>
                                <div className="flex items-center justify-center"><Button type="submit" className="lg:w-[500px] w-[180px] rounded-3xl bg-[#EA6365] hover:bg-[#EA6365] hover:opacity-90 cursor-pointer">Login</Button></div>
                                <div className="flex items-center justify-center gap-2">
                                    <p className="lg:text-sm text-xs font-poppins">Dont Have An Account?</p>
                                    <Link to='/signup' className="text-[#EA6365] lg:text-sm text-xs font-poppins">Create Account</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}