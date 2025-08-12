import React from "react";
import FileImg from '../../assets/images/files.png'
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import type z from "zod";
import { SignUpSchema } from "../../lib/schemas/schema";
import AuthService from "../../services/auth.service";

type SignUpForm = z.infer<typeof SignUpSchema>

export default function SignUp() {

    const {useHandleSignUpRequest} = AuthService()

    const {mutate: handleSignUp} = useHandleSignUpRequest()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpForm>({
        resolver: zodResolver(SignUpSchema),
        mode: "onChange"
    })

    const [ShowPassword, setShowPassword] = useState<Boolean | null>(null)
    const [ConfirmPassword, setConfirmPassword] = useState<Boolean | null>(null)

    const onFormSubmit = (data: SignUpForm)=> {
        console.log("Submitted Data: ", data)
        handleSignUp(data)
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
                    <div className="flex items-center justify-center lg:w-full w-[250px]  h-screen">
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <div className="flex flex-col gap-5">
                                <div><p className="font-bold font-poppins lg:text-4xl">Create Account</p></div>
                                <div className="flex lg:flex-row flex-col lg:gap-10 gap-2">
                                    <div className="p-5 flex flex-col rounded-3xl  justify-center lg:w-[300px] w-[180px] bg-white shadow-2xl">
                                        <p className="font-medium  lg:text-base text-sm font-poppins">Full Name</p>
                                        <input {...register('fullName')} type="text" className="outline-none lg:text-sm text-xs" placeholder="Enter Your Full Name" />
                                        {errors.fullName && <p className="text-xs text-red-600">{errors.fullName.message}</p>}
                                    </div>
                                    <div className="p-5 flex flex-col rounded-3xl  justify-center lg:w-[300px] w-[180px] bg-white shadow-2xl">
                                        <p className="font-medium lg:text-base text-sm font-poppins">Email</p>
                                        <input {...register('email')} type="text" className="outline-none text-xs lg:text-sm" placeholder="Enter Your Email"/>
                                        {errors.email && <p className="text-xs text-red-600 ">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col rounded-3xl  justify-center lg:w-[640px] w-[180px] bg-white shadow-2xl">
                                    <p className="font-medium lg:text-base text-sm font-poppins">Password</p>
                                    <div className="flex items-center w-full">
                                        <input {...register('password')} type={`${ShowPassword ? 'text' : 'password'}`} className="outline-none text-xs w-full lg:text-sm" placeholder="Enter Your Password" />
                                        <button
                                            type="button"
                                            className="h-4 w-4 cursor-pointer"
                                            onClick={() => setShowPassword(!ShowPassword)}
                                        >
                                            {ShowPassword ? <EyeOff /> : <Eye />}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
                                </div>
                                <div className="p-5 flex flex-col rounded-3xl  justify-center lg:w-[640px] w-[180px] bg-white shadow-2xl">
                                    <p className="font-medium lg:text-base text-sm font-poppins">Confirm Password</p>
                                    <div className="flex items-center w-full">
                                        <input {...register('confirmPassword')} type={`${ConfirmPassword ? 'text' : 'password'}`} className="outline-none text-xs w-full lg:text-sm" placeholder="Confirm Your Password" />
                                        <button
                                            type="button"
                                            className="h-4 w-4 cursor-pointer"
                                            onClick={() => setConfirmPassword(!ConfirmPassword)}
                                        >
                                            {ConfirmPassword ? <EyeOff /> : <Eye />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && <p className="text-red-600 text-xs">{errors.confirmPassword.message}</p>}
                                </div>
                                <div className="flex items-center lg:justify-center">
                                    <Button type="submit" className="lg:w-[640px] w-[180px] p-5 rounded-3xl bg-[#FA7275] hover:bg-[#FA7275] hover:opacity-90 cursor-pointer">Create Account</Button>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <p className="lg:text-sm text-xs font-poppins">Already Have An Account?</p>
                                    <Link to='/login' className="lg:text-sm text-xs font-poppins cursor-pointer text-[#FA7275]">Login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}