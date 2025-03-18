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

export const PGEMedCard = ({ title, value, img, action, header, footer, classes, style, tooltipKey, desc }: CardProps) => {
    const handleButtonClick = () => {
        action?.(); // Execute the function passed as a prop, passing data
    };

    return (
        <div className={`border-1 border-slate-50 rounded-md flex ${action ? 'hover:border-blue-600 cursor-pointer' : ''} ${classes}`}
            style={{ borderRadius: "10px" }} onClick={handleButtonClick} >
            <span className="inline-flex align-items-center gap-1 py-2 px-3">
                <img src={img} alt="logo" width="60px" height="60px" />
            </span>
            <Tooltip target={`.${tooltipKey}`} mouseTrack mouseTrackLeft={10} />
            <span className='flex flex-col py-3' style={{ width: '100%' }}>
                <span className='flex justify-between'><span className="text-l font-bold whitespace-normal"
                    style={{ color: '#FFD992', height: '40px' }}>
                    {title}</span>
                    {tooltipKey ? <i className={`pi pi-info-circle px-2 mt-2 ${tooltipKey}`} data-pr-position="left"
                        data-pr-tooltip={desc} style={{ color: 'white', fontSize: '1.5rem' }}></i> : ""
                    }
                </span>
                <span className="text-white md:mt-4 text-xs align-items-center"> {footer}</span>
            </span>
        </div>)
}
