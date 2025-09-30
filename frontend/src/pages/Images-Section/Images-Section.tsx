import React from "react";
import OptionSvg from '../../assets/icons/Option.svg'
import { useFileStore } from "../../store/file-store";
import { ImageIcon } from "lucide-react";
import { formatDate, formatFileSize } from "../../lib/utils";

export default function ImagesSection() {

    const { groupedFiles, getCategorySizes } = useFileStore()


    const { images } = groupedFiles()
    const { imagesSize } = getCategorySizes()

    return (
        <div>
            <div className="bg-gray-100 w-full  rounded-3xl">
                <div className="p-5 flex flex-col gap-5">
                    <p className="text-4xl font-bold">Images</p>
                    <p className="text-lg font-bold">Total: {formatFileSize(imagesSize)}</p>
                </div>

                <div className="p-5">
                    <ul className="grid gap-5 grid-cols-4">
                        {images.map((img) => (
                            <li className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                                <div className="flex justify-between items-">

                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                        <ImageIcon />
                                    </div>
                                    <div className="flex flex-col items-end gap-5">
                                        <p><button className="cursor-pointer"><img src={OptionSvg} alt="" /></button></p>
                                        <p className="font-semibold">Size: {formatFileSize(img?.size)}</p>
                                    </div>
                                </div>
                                <div className="mt-5 w-[180px] overflow-hidden"><p className={`font-bold whitespace-nowrap ${img?.fileName.length > 20 ? "animate-marquee" : ""}`}>{img?.fileName}</p></div>
                                <div className="mt-16"><p>{formatDate(img?.createdAt)}</p></div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}