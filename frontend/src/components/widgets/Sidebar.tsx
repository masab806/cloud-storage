import { File, FileIcon, ImagesIcon, LayoutDashboard, PieChart, UserCircle, VideoIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useAuthStore } from "../../store/auth-store";


type SidebarProps = {
    steps: 'dashboard' | 'images' | 'media' | 'others' | 'documents',
    setstep: React.Dispatch<React.SetStateAction<'dashboard' | 'images' | 'media' | 'others' | 'documents'>>
}

export default function Sidebar({ steps, setstep }: SidebarProps) {

    const { user } = useAuthStore()
    console.log(user)


    const options = [
        {
            label: 'Dashboard',
            step: 'dashboard',
            icon: LayoutDashboard
        },
        {
            label: 'Documents',
            step: 'documents',
            icon: FileIcon
        },
        {
            label: 'Images',
            step: 'images',
            icon: ImagesIcon
        },
        {
            label: 'Media',
            step: 'media',
            icon: VideoIcon
        },
        {
            label: 'Others',
            step: 'others',
            icon: PieChart
        }
    ]


    return (
        <div className="w-[300px] h-[600px]">
            <div className="flex flex-col  mt-5  justify-center items-center">
                <ul className="flex flex-col gap-10">
                    {options.map(({ label, step, icon: Icon }) => (
                        <>
                            <li onClick={() => setstep(step as typeof steps)} className="flex items-center p-4 hover:bg-[#FA7275] cursor-pointer w-[200px] rounded-3xl hover:text-white gap-2">
                                <Icon />
                                <p className="text-lg font-semibold">{label}</p>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
            <div className="flex ml-10 gap-5 mt-24  h-full">
                <UserCircle className="text-[]" />
                <p className="font-bold">{user?.name}</p>
            </div>
        </div>
    )
}