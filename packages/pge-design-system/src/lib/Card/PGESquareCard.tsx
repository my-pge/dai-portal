'use client';
import React, { ReactNode } from 'react';
import './card.scss';
import { Tooltip } from 'primereact/tooltip';


interface CardProps {
    title: string;
    value: string;
    action?: () => void;
    footer?: ReactNode;
    header?: ReactNode;
    classes?: string;
    img?: string;
    tooltipKey?: string;
    desc?: string
    style?: React.CSSProperties
}

export const PGESquareCard = ({ title, value, img, action, header, footer, classes, style, tooltipKey, desc }: CardProps) => {
    const handleButtonClick = () => {
        action?.(); // Execute the function passed as a prop, passing data
    };

    return (
        <div className={`border-1 border-slate-50 rounded-md flex ${action ? 'hover:border-blue-600 cursor-pointer' : ''} ${classes}`}
            style={{ borderRadius: "10px" }} onClick={handleButtonClick} >

            <span className='flex py-2 flex-col place-items-center' style={{ width: '100%' }}>
                <span className="text-l  whitespace-normal"
                    style={{ color: '#000' }}>
                    {title}</span>
                <span className='text-xl font-semibold'>
                    {value}
                </span>
            </span>
        </div>)
}
