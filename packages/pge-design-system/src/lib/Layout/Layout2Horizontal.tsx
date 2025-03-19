'use client';

import React from "react";

type layoutProps = {
    children: JSX.Element[];
    background?: string
}

export const Layout2Horizontal = ({ children, background }: layoutProps) => {
    const [nav, main] = children

    return (<div style={{ background: `${background}`, display: 'flex flex-col' }} >
        <div className="sticky z-1 top-0">{nav}</div>
        <>{main}</>
    </div >)
}