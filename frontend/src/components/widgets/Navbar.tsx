import React, { useRef } from "react";
import { DoorOpen, SearchIcon, UploadIcon } from "lucide-react";
import { Button } from "../ui/button";
import AuthService from "../../services/auth.service";
import { useFileStore } from "../../store/file-store";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Navbar() {

    const { useHandleLogout } = AuthService()


    const { uploadFile } = useFileStore()

    const handleLogout = useHandleLogout()
    const fileInputRef = useRef(null)

    const handleButtonClick = () => {
        fileInputRef?.current?.click()
    }

    const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            try {
                uploadFile(file)
                toast.success("File Uploaded!")
            } catch (error) {
                console.log("Error Occured!", error)
            }
        }
    }

    return (
        <div className="p-5 sticky top-0 z-50  bg-white">
            <div className="flex gap-24  items-center">
                <div className="flex items-center gap-5">
                    <div className="flex items-end relative">
                        <div className="w-12 h-12 bg-[#FEE3E3] rounded-3xl"></div>
                        <div className="w-6 h-6 absolute left-8 rounded-3xl bg-[#FA7275]"></div>
                    </div>

                    <div>
                        <p className="font-bold text-[#FA7275] text-3xl">Storage</p>
                    </div>
                </div>


                <div className="flex gap-5 items-center w-full justify-end">
                    <input type="file" ref={fileInputRef} hidden onChange={handleFiles} name="" id="" />
                    <Button onClick={handleButtonClick} className="bg-[#FA7275] w-[150px] rounded-4xl cursor-pointer hover:bg-[#FA7275] hover:opacity-90">
                        <UploadIcon />
                        <p>Upload</p>
                    </Button>
                    <DoorOpen onClick={handleLogout} className="text-[#FA7275] cursor-pointer" />
                </div>
            </div>

        </div>
    )
}