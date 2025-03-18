'use client'
import React from 'react';
import Layout from '../../components/Layout';
import { BreadCrumb } from 'primereact/breadcrumb';
import Link from 'next/link';

export default function Frontend() {
    const items = [{ label: 'Services', template: () => <Link className='font-semibold text-blue-500' href="/services">Services</Link> }, { label: 'Frontend Consultation' }]

    return (
        <Layout>
            <BreadCrumb model={items} />
        </Layout>
    )
}