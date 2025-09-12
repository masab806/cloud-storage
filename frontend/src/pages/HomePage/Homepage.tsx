import React, { useState } from "react";
import Sidebar from "../../components/widgets/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import ImagesSection from "../Images-Section/Images-Section";
import MediaSection from "../Media-Section/Media-Section";
import OtherSection from "../Other-Secton/Other-Section";
import DocumentsSection from "../Documents-Section/Documents-Section";

export default function HomePage(){

    const [step, setstep] = useState<'dashboard' | 'images' | 'media' | 'others' | 'documents'>('dashboard')

    return (
           <div className='flex overflow-hidden h-screen'>
            <Sidebar steps={step} setstep={setstep}/>

            <div className='flex-1'>
                {step === 'dashboard' && <Dashboard/>}
                {step === 'images' && <ImagesSection/>}
                {step === 'media' && <MediaSection/>}
                {step === 'others' && <OtherSection/>}
                {step === 'documents' && <DocumentsSection/>}
            </div>
        </div>
    )
}