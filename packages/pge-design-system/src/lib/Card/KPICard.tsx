'use client';
import React from "react";

type kpiCardProps = {
    label: string;
    value: any;
    bgColor: string;
    lineColor: string;
    subLabel?: string;
}

export const KPICard = ({ label = "test", value = "value", subLabel = "", lineColor = "#ff5733", bgColor = "rgba(255, 255, 255)" }: kpiCardProps) => {
    const cardbg = {
        backgroundColor: bgColor,
        width: "230px", height: "75px",
        borderTopRightRadius: "6px",
        borderBottomRightRadius: "6px"
    };
    const cardline = {
        backgroundColor: lineColor,
        width: "5px",
        height: "75px",
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px"
    };
    return (<div className="flex">
        <div style={cardline}></div>
        <div className="flex-col" style={cardbg}>
            <div className="p-2 text-xs text-left font-semibold">{label.toUpperCase()}</div>
            <div className="flex"><div className="text-2xl font-bold text-left px-2">{value}</div>
                <div className="text-xs mt-2">{subLabel}</div></div>
        </div></div >
    );
}