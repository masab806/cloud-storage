import React from "react";
import OptionSvg from '../../assets/icons/Option.svg'
import { useFileStore } from "../../store/file-store";
import { VideoIcon } from "lucide-react";
import { formatDate, formatFileSize } from "../../lib/utils";


export default function MediaSection() {

    const { groupedFiles, getCategorySizes } = useFileStore()
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
                    <ul className="grid gap-5 grid-cols-4">
                        {media.map((file) => (
                            <li className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                                <div className="flex justify-between items-">

                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                        <VideoIcon />
                                    </div>
                                    <div className="flex flex-col items-end gap-5">
                                        <p><button className="cursor-pointer"><img src={OptionSvg} alt="" /></button></p>
                                        <p className="font-semibold">Size: {formatFileSize(file?.size)}</p>
                                    </div>
                                </div>
                                <div className="mt-5 w-[150px] overflow-hidden"><p className={`font-bold whitespace-nowrap ${file?.fileName.length > 20 ? "animate-marquee" : ""}`}>{file?.fileName}</p></div>
                                <div className="mt-16"><p>{formatDate(file?.createdAt)}</p></div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}