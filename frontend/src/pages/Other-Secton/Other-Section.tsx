import React from "react";
import OptionSvg from '../../assets/icons/Option.svg'
import { useFileStore } from "../../store/file-store";
import { formatDate, formatFileSize } from "../../lib/utils";


export default function OtherSection() {

    const { groupedFiles, getCategorySizes } = useFileStore()

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
                    <ul className="grid gap-5 grid-cols-4">
                        {others.map((file, idx) => (
                            <li key={idx} className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                                <div className="flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-center">
                                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                            Icon
                                        </div>
                                        <div className="flex flex-col items-end gap-5">
                                            <p>
                                                <button className="cursor-pointer">
                                                    <img src={OptionSvg} alt="" />
                                                </button>
                                            </p>
                                            <p className="font-semibold">Size: {formatFileSize(file?.size)}</p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <p className={`font-bold whitespace-nowrap${file?.fileName && file?.fileName.length > 20 ? " animate-marquee" : ""}`}>
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