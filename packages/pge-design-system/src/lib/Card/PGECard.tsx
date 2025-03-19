'use client';
import React, { ReactNode } from 'react';
import './card.scss';


interface CardProps {
    title: string;
    value: ReactNode;
    action?: () => void;
    footer?: ReactNode;
    header?: ReactNode;
    classes?: string;
    img?: string;
    style?: React.CSSProperties
}

export const PGECard = ({ title, value, img, action, header, footer, classes, style }: CardProps) => {
    const handleButtonClick = () => {
        action?.(); // Execute the function passed as a prop, passing data
    };

    return (<div className={`border-1 border-slate-50 rounded-md ${action ? 'hover:border-blue-600 border-2 cursor-pointer' : ''} ${classes}`}
        style={{ borderRadius: "15px" }} onClick={handleButtonClick} >
        <span className="inline-flex align-items-center gap-1 py-3 px-4">
            <img src={img} alt="logo" width="70px" height="70px" />
            <span className="font-medium text-l pl-2 font-semibold whitespace-normal" style={{ color: '#ED9405' }}>
                {title}</span>
        </span>
        <p className="px-4 align-items-center pb-2" style={{ color: '#666', fontSize: '13px' }}>
            {value}
        </p>
        <span className="text-blue-600 px-4 text-xs align-items-center"> {footer}</span>
    </div >)
}
