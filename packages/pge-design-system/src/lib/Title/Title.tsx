'use client';
import { Toolbar } from "primereact/toolbar";
import React from "react";
import { titleProps } from "../../types/types";


export const PGETitle = ({ startContent, centerContent, endContent, classes }: titleProps) => {
    return (
        <Toolbar className={classes} start={startContent} center={centerContent} end={endContent} />
    )
}