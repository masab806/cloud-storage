import React from "react";
import OptionSvg from '../../assets/icons/Option.svg'
import { useFileStore } from "../../store/file-store";
import { formatDate, formatFileSize } from "../../lib/utils";
import { FileIcon } from "lucide-react";

export default function DocumentsSection() {

    const { groupedFiles } = useFileStore()
    const {getCategorySizes} = useFileStore()

    const { documents } = groupedFiles()
    const {documentsSize} = getCategorySizes()



    return (
        <div>
            <div className="bg-gray-100 w-full  rounded-3xl">
                <div className="p-5 flex flex-col gap-5">
                    <p className="text-4xl font-bold">Documents</p>
                    <p className="text-lg font-bold">Total: {formatFileSize(documentsSize)}</p>
                </div>

                <div className="p-5">
                    <ul className="grid gap-5 grid-cols-4">
                        {documents.map((doc) => (
                            <li className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                                <div className="flex justify-between items-">

                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                        <FileIcon />
                                    </div>
                                    <div className="flex flex-col items-end gap-5">
                                        <p><button className="cursor-pointer"><img src={OptionSvg} alt="" /></button></p>
                                        <p className="font-semibold">Size: {formatFileSize(doc.size)}</p>
                                    </div>
                                </div>
                                <div className="w-[180px] overflow-hidden"><p className={`font-bold whitespace-nowrap ${doc?.fileName.length > 20 ? "animate-marquee" : ""}`}>{doc?.fileName}</p></div>
                                <div className="mt-16"><p>{formatDate(doc?.createdAt)}</p></div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}