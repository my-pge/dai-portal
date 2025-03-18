'use client'
import React from 'react';
import Image from 'next/image';
import handshake from '../../public/banner_handshake.png';
import "./banner.css";

export const Banner = () => {
    return (<div className='main svg-container'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1194 500" preserveAspectRatio="xMidYMid meet">
                <image href="../banner_darkGradient.png" height="500" width="1200" />
                <text className='text-6xl font-semibold py-2' x="12%" y="150" fill="#FBBB36">Data Analytics & Insights</text>
                <text className='text-2xl font-semibold py-2' x="15%" y="200" fill="#FFD992">Solutions That Deliver Business Outcomes.</text>

                <text className="pt-12 text-3xl" fill="#00ACEE" x="30" y="270">
                    <tspan x="12%" dy="1.2em"> Partner with us in leveraging trusted data to</tspan>
                    <tspan x="14%" dy="1.6em"> Advance PG&E&apos;s True North Strategy.</tspan>
                </text>

                <foreignObject x='70%' y='13%' width='500px' height='500px'>
                    <Image
                        alt="hat image"
                        width='380' height='380'
                        src={handshake}
                    />
                </foreignObject>
            </svg >
        </div >
    </div >
    )
}
