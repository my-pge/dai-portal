/* eslint-disable @next/next/no-img-element */
import React from 'react';

type StandStrategyProps = {
    image: string;
    title: string;
    subTitle: string
    alt: string
}
export function StandStrategy({ image, title, subTitle, alt }: StandStrategyProps) {

    return (
        <div className='px-6 py-2 flex'><span className='mt-2'><img src={image} alt={alt} width="50px" height="50px" /></span>
            <span className='p-2'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="font-medium text-xl pl-2 font-semibold whitespace-normal">
                        {title}</span>
                    <span className="font-medium text-sm pl-2 text-gray-500 whitespace-normal">
                        {subTitle}</span>
                </div></span>
        </div>
    )
}