import { File, ImagesIcon, LayoutDashboard, PieChart, Square, UserCircle, UserIcon, VideoIcon } from "lucide-react";
import React from "react";
import FileSvg from '../../assets/images/files.png'

export default function Sidebar(){
    return (
        <div className="w-[300px] h-[600px]">
            <div className="flex flex-col mt-16   justify-center items-center">
                <ul className="flex flex-col gap-10">
                    <li className="flex items-center p-2 hover:bg-[#FA7275] cursor-pointer w-[200px] rounded-3xl hover:text-white gap-2">
                        <LayoutDashboard/>
                        <p className="text-lg font-semibold">Dashboard</p>
                    </li>
                    <li className="flex items-center p-2 hover:bg-[#FA7275] cursor-pointer w-[200px] rounded-3xl hover:text-white gap-2">
                        <ImagesIcon/>
                        <p className="text-lg font-semibold">Images</p>
                    </li>
                    <li className="flex items-center p-2 hover:bg-[#FA7275] cursor-pointer w-[200px] rounded-3xl hover:text-white gap-2">
                        <VideoIcon/>
                        <p className="text-lg font-semibold">Media</p>
                    </li>
                    <li className="flex items-center p-2 hover:bg-[#FA7275] cursor-pointer w-[200px] rounded-3xl hover:text-white gap-2">
                        <PieChart/>
                        <p className="text-lg font-semibold">Others</p>
                    </li>
                 
                </ul>
            </div>
            <div className="flex ml-10 gap-5 mt-24  h-full">
                <UserCircle className="text-[]"/>
                <p className="font-bold">Masab Ahmed</p>
            </div>
        </div>
    )
}