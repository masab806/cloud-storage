import React from "react";
import OptionSvg from '../../assets/icons/Option.svg'


export default function OtherSection(){
    return (
          <div>
            <div className="bg-gray-100 w-full  rounded-3xl">
                <div className="p-5 flex flex-col gap-5">
                    <p className="text-4xl font-bold">Others</p>
                    <p className="text-lg font-bold">Total: 25GB</p>
                </div>

                <div className="p-5">
                    <ul className="grid gap-5 grid-cols-4">
                        <li className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                            <div className="flex justify-between items-">

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                    Icon
                                </div>
                                <div className="flex flex-col items-end gap-5">
                                    <p><button className="cursor-pointer"><img src={OptionSvg} alt="" /></button></p>
                                    <p className="font-semibold">Total Size: 2GB</p>
                                </div>
                            </div>
                            <div className="mt-5"><p className="font-bold">File.png</p></div>
                            <div className="mt-16"><p>10:09pm, Fri</p></div>
                        </li>
                        <li className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                            <div className="flex justify-between items-">

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                    Icon
                                </div>
                                <div className="flex flex-col items-end gap-5">
                                    <p><button className="cursor-pointer"><img src={OptionSvg} alt="" /></button></p>
                                    <p className="font-semibold">Total Size: 2GB</p>
                                </div>
                            </div>
                            <div className="mt-5"><p className="font-bold">File.png</p></div>
                            <div className="mt-16"><p>10:09pm, Fri</p></div>
                        </li>
                        <li className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                            <div className="flex justify-between items-">

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                    Icon
                                </div>
                                <div className="flex flex-col items-end gap-5">
                                    <p><button className="cursor-pointer"><img src={OptionSvg} alt="" /></button></p>
                                    <p className="font-semibold">Total Size: 2GB</p>
                                </div>
                            </div>
                            <div className="mt-5"><p className="font-bold">File.png</p></div>
                            <div className="mt-16"><p>10:09pm, Fri</p></div>
                        </li>
                        <li className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                            <div className="flex justify-between items-">

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                    Icon
                                </div>
                                <div className="flex flex-col items-end gap-5">
                                    <p><button className="cursor-pointer"><img src={OptionSvg} alt="" /></button></p>
                                    <p className="font-semibold">Total Size: 2GB</p>
                                </div>
                            </div>
                            <div className="mt-5"><p className="font-bold">File.png</p></div>
                            <div className="mt-16"><p>10:09pm, Fri</p></div>
                        </li>
                        <li className="h-[250px] w-[250px] p-5 rounded-3xl bg-white">
                            <div className="flex justify-between items-">

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FEF1F1]">
                                    Icon
                                </div>
                                <div className="flex flex-col items-end gap-5">
                                    <p><button className="cursor-pointer"><img src={OptionSvg} alt="" /></button></p>
                                    <p className="font-semibold">Total Size: 2GB</p>
                                </div>
                            </div>
                            <div className="mt-5"><p className="font-bold">File.png</p></div>
                            <div className="mt-16"><p>10:09pm, Fri</p></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}