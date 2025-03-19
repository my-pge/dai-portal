'use client';
import React, { ReactNode } from 'react';


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

export const Card = ({ title, subTitle, img, action, header, footer, classes, style }: CardProps) => {
    const handleButtonClick = () => {
        action?.(); // Execute the function passed as a prop, passing data
    };

    return (
        <div className={`border-1 border-slate-50 rounded-md flex p-2 my-2 justify-center ${classes} place-items-center`}
            style={{ borderRadius: "10px", width: '300px', height: '75px' }} onClick={handleButtonClick} >

            <span className='flex flex-col'>
                <span className="font-medium text-l whitespace-normal" style={{ color: '#fff' }}>
                    {title}</span>
                <span className="text-s font-semibold text-center" style={{ color: '#fff' }}> {subTitle}</span>
            </span>

        </div >
    )
}
