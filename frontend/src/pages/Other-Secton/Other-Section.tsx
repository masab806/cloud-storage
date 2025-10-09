import React from "react";
import OptionSvg from '../../assets/icons/Option.svg'
import { useFileStore } from "../../store/file-store";
import { formatDate, formatFileSize } from "../../lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DownloadIcon, TrashIcon } from "lucide-react";


export default function OtherSection() {

    const { groupedFiles, getCategorySizes, downloadFile, deleteFile } = useFileStore()

    const { others } = groupedFiles()
    const { othersSize } = getCategorySizes()

    return (
        <div>
            <div className="bg-gray-100 w-full  rounded-3xl">
                <div className="p-5 flex flex-col gap-5">
                    <p className="text-4xl font-bold">Others</p>
                    <p className="text-lg font-bold">Total: {formatFileSize(othersSize)}</p>
                </div>

                <div className="p-5">
                    <ul className="grid gap-5 grid-cols-3">
                        {others.map((file, idx) => (
                            <li key={idx} className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                                <div className="flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-center">
                                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                            Icon
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
                                    <div className="mt-5">
                                        <p className={`font-bold `}>
                                            {file?.fileName}
                                        </p>
                                    </div>
                                    <div className="mt-16">
                                        <p>{formatDate(file?.createdAt)}</p>
                                    </div>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}