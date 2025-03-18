'use client'
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Divider } from 'primereact/divider';

export default function Highlights() {
    return (
        <Layout background='rgb(237,244,255)'>
            <section className='p-4 border-b-[1px] w-[98vw]'>
                <p className='text-center flex'>
                    <span className='text-pretty inline-flex gap-1 px-4 py-4 text-4xl font-semibold'>Data Resources</span>
                </p>
                <section className='bg-white p-6' >
                    <Link className="font-semibold text-lg text-[#197eb9]" target="new" href="https://pge.sharepoint.com/sites/DataManagement/SitePages/Home.aspx">Enterprise Data Management</Link>
                    <div className='pt-3 text-[#666]'>Enterprise Data Management Services enable process areas, functional areas, and programs to systematially manage their data.</div>
                    <Divider />
                    <Link className="font-semibold text-lg text-[#197eb9]" target="new" href="https://pge.sharepoint.com/sites/EDSO/SitePages/EDSO-Site-Re-vamp-[DRAFT].aspx?xsdata=MDV8MDJ8fDBhMGVlZjBmYjhlMzQwNDYxNmRiMDhkZDVmZjI2ZDYxfDQ0YWU2NjFhZWNlNjQxYWFiYzk2N2MyYzg1YTA4OTQxfDB8MHw2Mzg3NzIyMTY5NzgyODIyMDN8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPakUzT1daaFpqa3pMVGRrTnprdE5HTXlaaTA1TldNekxUTTNaV0ZoT1dabVlXSmlOVjh6TVdGaE5HRTBaUzA1TXpFNUxUUTRNamd0WVROaU9TMDRZbVptTURneU5qVTFNakZBZFc1eExtZGliQzV6Y0dGalpYTXZiV1Z6YzJGblpYTXZNVGMwTVRZeU5EZzVOekUzT1E9PXw5MWY0ZTNhZTJlZjg0YmMxYTEwOTA4ZGQ1ZmYyNmQ2MHw5MjU1MGRlNGY4ZTU0YzljYTExNjNiNjg4ODg1ZDc4Mg%3D%3D&sdata=MjduM0ptZFdNa1B3eklibzFZdjNodDVzUU4zSjl5ZDdsa1lRMVBXbE02RT0%3D&ovuser=44ae661a-ece6-41aa-bc96-7c2c85a08941%2CC4B9%40pge.com">Enterprise Data Science & Atrificial Intelligence</Link>
                    <div className='pt-3 text-[#666]'>Enterprise Data Science & Artificial Intelligence leverages large amounts of data to extract insights and inform business decisions. We use data, machine learning, and artificial intelligence to transform existing practices and innovate new processes to keep PG&E on the forefront of safety, efficiency, and excellence.</div>
                </section>
            </section>
        </Layout>
    )
}