'use client';
import React from "react";

type layoutProps = {
    children: JSX.Element[];
    rightVisible?: boolean;
}

export const Layout3Vertical = ({ children, rightVisible }: layoutProps) => {
    const [left, main, right] = children

    return (<div className="flex" style={{ minHeight: 'calc(100vh-40vh)' }}>
        {left}
        <div style={{ flexGrow: '1' }}>{main}</div>
        <div style={{ width: `${rightVisible ? '17vw' : '40px'}` }} className="border-s-indigo-500 bg-slate-50 h-screen" >
            {right}
        </div>
    </div >)
}