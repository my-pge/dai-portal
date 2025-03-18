'use client';
import React, { ReactNode } from 'react';
import './card.scss';


interface CardProps {
    title: string;
    subTitle: string;
    action?: () => void;
    footer?: ReactNode;
    header?: ReactNode;
    classes?: string;
    img?: string;
    style?: React.CSSProperties;
}

export const PGESmallCard = ({ title, subTitle, img, action, header, footer, classes, style }: CardProps) => {
    const handleButtonClick = () => {
        action?.(); // Execute the function passed as a prop, passing data
    };

    return (
        <div className={`border-1 border-slate-50 rounded-md flex ${action ? 'hover:border-blue-600 cursor-pointer' : ''} ${classes}`}
            style={{ borderRadius: "10px" }} onClick={handleButtonClick} >
            <span className="inline-flex align-items-center gap-1 px-4">
                <img src={img} alt="logo" width="30px" height="30px" />
            </span>
            <span className='flex flex-col py-2'>
                <span className="font-medium text-xl font-semibold whitespace-normal" style={{ color: '#FFD992' }}>
                    {title}</span>
                <span className="text-s font-semibold align-items-center" style={{ color: '#FFD992' }}> {subTitle}</span>
                <span className="text-white py-1 text-xs align-items-center"> {footer}</span>
            </span>

        </div >
    )
}
