
import React from 'react';
import { Button } from 'primereact/button';

type ContactCardProps = {
    msg: string;
    buttonLabel: string;
    link: string
}
export function ContactCard({ msg, buttonLabel, link, }: ContactCardProps) {
    console.log

    return (
        <div className="rounded-md border-b-[1px] bg-[#f5f5f5] p-4 ml-4" style={{ width: "400px", height: "220px" }}>
            <div className="p-4 rounded-md border-b-[1px] bg-white text-lg text-center flex flex-col flex-1" style={{ width: "350px", height: "170px" }}>
                <span >{msg}</span>
                <span className="text-center " style={{ marginTop: "auto" }}><Button label={buttonLabel} rounded size="small" onClick={() => window.open(link)} /></span>
            </div>
        </div >
    )
}