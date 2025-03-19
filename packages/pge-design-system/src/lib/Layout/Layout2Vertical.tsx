'use client';

import React from "react";

type layoutProps = {
    children: JSX.Element[];
    rightVisible?: boolean;
}

export const Layout2Vertical = ({ children }: layoutProps) => {
    const [left, main] = children

    return (<div style={{ display: 'flex', minHeight: 'calc(100vh-40vh)' }} >
        <div>{left}</div>
        <div style={{ flexGrow: '1', width: "80vw" }}>{main}</div>
    </div >)
}