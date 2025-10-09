import React from "react";
import OptionSvg from '../../assets/icons/Option.svg'
import { useFileStore } from "../../store/file-store";
import { DownloadIcon, TrashIcon, VideoIcon } from "lucide-react";
import { formatDate, formatFileSize } from "../../lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";


export default function MediaSection() {

    const { groupedFiles, getCategorySizes, downloadFile, deleteFile } = useFileStore()
    const { media } = groupedFiles()
    const { mediaSize } = getCategorySizes()

    return (
        <div>
            <div className="bg-gray-100 w-full  rounded-3xl">
                <div className="p-5 flex flex-col gap-5">
                    <p className="text-4xl font-bold">Media</p>
                    <p className="text-lg font-bold">Total: {formatFileSize(mediaSize)}</p>
                </div>

                <div className="p-5">
                    <ul className="grid gap-5 grid-cols-3">
                        {media.map((file) => (
                            <li className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                                <div className="flex justify-between items-">

                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                        <VideoIcon />
                                    </div>
                                     <div className="flex flex-col items-end gap-5">
                                        <p><DropdownMenu>
                                            <DropdownMenuTrigger><button className="cursor-pointer"><img src={OptionSvg} alt="" /></button></DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <div className="bg-white shadow-2xl rounded-2xl h-[200px] w-[200px] fixed">
                                                    <div className="p-5 font-bold w-[100px] overflow-hidden">{file?.fileName}</div>
                                                    <ul className="flex flex-col gap-5 rounded-3xl ml-5 justify-center ">
                                                        <li onClick={()=> downloadFile(file?.id, file?.fileName)} className="flex items-center gap-2 cursor-pointer">
                                                            <div className="p-2 bg-green-500 rounded-full"><DownloadIcon size={16} className="text-white"/></div>
                                                            <p className="text-sm font-bold">Download</p>
                                                        </li>
                                                        <li onClick={()=> {deleteFile(file?.id), window.location.reload()}} className="flex items-center gap-2 cursor-pointer">
                                                             <div className="p-2 bg-red-500 rounded-full"><TrashIcon size={16} className="text-white"/></div>
                                                            <p className="text-sm font-bold">Delete</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </DropdownMenuContent>
                                            </DropdownMenu></p>
                                        <p className="font-semibold">Size: {formatFileSize(file?.size)}</p>
                                    </div>
                                </div>
                                <div className="mt-5 w-[150px] overflow-hidden"><p className={`font-bold `}>{file?.fileName}</p></div>
                                <div className="mt-16"><p>{formatDate(file?.createdAt)}</p></div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}