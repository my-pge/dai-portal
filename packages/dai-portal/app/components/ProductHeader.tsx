import React from 'react';

type ProductHeaderProps = {
    type: string;
    title: string;
    color: string
}
export function ProductHeader({ title, type, color }: ProductHeaderProps) {

    return (
        <><span><h1 className="text-4xl text-black font-bold flex text-center px-4 mt-1">{title}</h1>
        </span><span className='text-center mt-3 pr-3 '>TYPE</span>
            <span className={`mt-[22px] ${color} dot`}></span><span className='text-center text-gray-500 mt-3 pl-1'>{type}</span></>
    )
}
