'use client'
import { Layout2Horizontal } from '@pge-fe-monorepo/pge-design-system/src/lib';
import React from 'react';
import { Navbar } from './Navbar';

export default function Layout({ children, background }: Readonly<{ children: React.ReactNode, background?: string }>) {
    return (
        <Layout2Horizontal background={background}>
            <Navbar />
            <>{children}</>
        </Layout2Horizontal >
    )
}



