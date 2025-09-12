import React from 'react'
import Sidebar from '../../components/widgets/Sidebar'
import { ChartRadialText } from '../../components/ui/chart-radial'
import DocImg from '../../assets/icons/file-doc.svg'
import { File, ImageIcon, PieChart, VideoIcon } from 'lucide-react'

export default function Dashboard() {
    return (
        <div className='p-3'>
            <div className='h-[600px] rounded-3xl grid grid-cols-2 bg-gray-100'>
                <div className='p-5'>
                    <div className='h-[200px] flex items-center justify-around bg-[#FF7474] rounded-3xl w-[500px]'>
                        <div className='w-[200px] h-[200px]'><ChartRadialText /></div>
                        <div className='mr-10'>
                            <p className='font-bold text-white text-lg'>Avaliable Storage</p>
                            <p className='text-white font-bold'>82GB/128GB</p>
                        </div>
                    </div>
                    <div>
                    </div>

                    <div className='p-2 mt-5 grid grid-cols-2 gap-10'>
                        <div className='h-[150px] p-5 rounded-3xl w-[200px] bg-white'>
                            <div className='flex items-center gap-5'>
                                <div className='w-[40px] rounded-2xl p-2 bg-[#FF7474]'><File className='text-white'/></div>
                                <p className='font-bold text-lg'>Documents</p>
                            </div>

                            <div className='mt-5'><div className='h-0.5 bg-gray-100'></div></div>
                            <div className='flex flex-col mt-3 items-center justify-center'>
                                <p className='text-sm font-bold'>Last Update</p>
                                <p className='text-xs text-gray-300 font-semibold'>10:30 pm, 10 Oct</p>
                            </div>
                        </div>
                        <div className='h-[150px] p-5 rounded-3xl w-[200px] bg-white'>
                            <div className='flex items-center gap-5'>
                                <div className='w-[40px] rounded-2xl p-2 bg-blue-500'><ImageIcon className='text-white'/></div>
                                <p className='font-bold text-lg'>Images</p>
                            </div>

                            <div className='mt-5'><div className='h-0.5 bg-gray-100'></div></div>
                            <div className='flex flex-col mt-3 items-center justify-center'>
                                <p className='text-sm font-bold'>Last Update</p>
                                <p className='text-xs text-gray-300 font-semibold'>10:30 pm, 10 Oct</p>
                            </div>
                        </div>
                        <div className='h-[150px] p-5 rounded-3xl w-[200px] bg-white'>
                            <div className='flex items-center gap-5'>
                                <div className='w-[40px] rounded-2xl p-2 bg-green-500'><VideoIcon className='text-white'/></div>
                                <p className='font-bold text-lg'>Videos</p>
                            </div>

                            <div className='mt-5'><div className='h-0.5 bg-gray-100'></div></div>
                            <div className='flex flex-col mt-3 items-center justify-center'>
                                <p className='text-sm font-bold'>Last Update</p>
                                <p className='text-xs text-gray-300 font-semibold'>10:30 pm, 10 Oct</p>
                            </div>
                        </div>
                        <div className='h-[150px] p-5 rounded-3xl w-[200px] bg-white'>
                            <div className='flex items-center gap-5'>
                                <div className='w-[40px] rounded-2xl p-2 bg-purple-500'><PieChart className='text-white'/></div>
                                <p className='font-bold text-lg'>Others</p>
                            </div>

                            <div className='mt-5'><div className='h-0.5 bg-gray-100'></div></div>
                            <div className='flex flex-col mt-3 items-center justify-center'>
                                <p className='text-sm font-bold'>Last Update</p>
                                <p className='text-xs text-gray-300 font-semibold'>10:30 pm, 10 Oct</p>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className='p-5'>
                    <div className='bg-white rounded-3xl h-full'>
                        <div className='p-5'>
                            <p className='text-xl font-bold'>Recent Uploaded Files</p>
                        </div>

                        <div>
                            <ul className='flex flex-col gap-8'>
                                <li className='px-5 gap-3 flex items-center'>
                                    <div className='bg-[#FF7474] w-[50px] p-2 rounded-2xl flex items-center justify-center'><File className='text-white'/></div>
                                    <p className='font-bold'>Doc 1.pdf</p>
                                </li>
                                <li className='px-5 gap-3 flex items-center'>
                                    <div className='bg-[#FF7474] w-[50px] p-2 rounded-2xl flex items-center justify-center'><File className='text-white'/></div>
                                    <p className='font-bold'>Doc 1.pdf</p>
                                </li>
                                <li className='px-5 gap-3 flex items-center'>
                                    <div className='bg-[#FF7474] w-[50px] p-2 rounded-2xl flex items-center justify-center'><File className='text-white'/></div>
                                    <p className='font-bold'>Doc 1.pdf</p>
                                </li>
                                <li className='px-5 gap-3 flex items-center'>
                                    <div className='bg-[#FF7474] w-[50px] p-2 rounded-2xl flex items-center justify-center'><File className='text-white'/></div>
                                    <p className='font-bold'>Doc 1.pdf</p>
                                </li>
                                <li className='px-5 gap-3 flex items-center'>
                                    <div className='bg-[#FF7474] w-[50px] p-2 rounded-2xl flex items-center justify-center'><File className='text-white'/></div>
                                    <p className='font-bold'>Doc 1.pdf</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}