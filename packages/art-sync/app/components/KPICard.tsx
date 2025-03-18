'use client';
import React from "react";

type kpiCardProps = {
    label: string;
    value: any;
    bgColor: string;
    lineColor: string;
    icon?: string;
}

export const KPICard = ({ label = "test", value = "value", icon = "", lineColor = "#ff5733", bgColor = "rgba(255, 255, 255)" }: kpiCardProps) => {
    const cardline = {
        backgroundColor: lineColor,
        width: "5px",
        height: "75px",
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px"
    };
    return (<div className="flex place-items-center">
        <div style={cardline}></div>
        <div className={`border-1 border-slate-50 rounded-md flex place-items-center `}
            style={{ borderRadius: "10px", width: '300px', height: '75px', backgroundColor: `${bgColor}` }}>
            <span className="inline-flex align-items-center gap-1 px-4">
                <img src={icon} alt=" logo" width="30px" height="30px" />
            </span>
            <span className='flex flex-col py-2'>
                <span className="p-2 text-xs text-left font-semibold">{label.toUpperCase()}</span>
                <span className="flex"><span className="text-2xl font-bold text-left px-2" style={{ color: `${lineColor}` }}>{value}</span>
                </span>
            </span>
        </div ></div >
    );
}

{/* <div className={`border-1 border-slate-50 rounded-md flex p-2 my-2 justify-center ${classes} place-items-center`}
            style={{ borderRadius: "10px", width: '300px', height: '75px' }} onClick={handleButtonClick} ></div> */}

