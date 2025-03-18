'use client'
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { BreadCrumb } from 'primereact/breadcrumb';
import Link from 'next/link';
import { StandStrategy } from '@/app/components/StandStrategy';
import { ProductHeader } from '@/app/components/ProductHeader';
import { ContactCard } from '@/app/components/ContactCard';
import { EPSSData } from '../../../APIs/EPSS'
import { Resources } from '@/app/components/Resources';
import { Faqs } from '@/app/components/Faqs';
import { PGESquareCard } from '@pge-fe-monorepo/pge-design-system/src/lib';

export default function EPSS() {
    const items = [{ label: 'Products', template: () => <Link className='font-semibold text-blue-500' href="/products">Products</Link> },
    { label: 'EPSS (Enhanced Powerline Safety Settings)' }]

    return (
        <Layout background='rgb(237,244,255)'>
            <div>
                <BreadCrumb model={items} />
                <section className='px-6 pt-4 flex'>
                    <ProductHeader title="EPSS (Enhanced Powerline Safety Settings)" type="ELECTRIC" color="red" />
                </section>
                <section className="flex p-4">
                    <div className='flex flex-column'><div className='px-6 py-4'>{EPSSData.getSummary()}</div>
                        <StandStrategy title="Rebuild the Trust with our Customers" subTitle="True North Strategy" image="../prd_main_northStrategy.png" alt="EPSS" />
                        <StandStrategy title="Catastrophic Wildfires Shall Stop" subTitle="Stand" image="../prd_main_stand.png" alt="EPSS" />
                    </div>
                    <img src="../EPSS.png" alt="EPSS" width="600px" height="500px" />

                </section>
                <section className="p-4 flex">
                    <div className="bg-white p-6 rounded-md w-[65%] ">
                        <span className='p-2'>
                            <h1 className='pb-4 inline-flex gap-1 font-semibold text-2xl'>Featured Video</h1>
                        </span>
                        <div className='flex'>
                            <iframe width="350" height="200"
                                src="https://players.brightcove.net/1691765962001/SkPAPXDi_default/index.html?videoId=6301866511001"
                                tabIndex={0} allowFullScreen={true} role="document" style={{ zIndex: 4 }}></iframe>
                            <div className='p-5'>
                                PG&E engineers use laboratory to stress test EPSS Technology
                                <br /> <br />
                                Go to <Link className="text-blue-500" href="https://pge.sharepoint.com/Topics/EPSS/SitePages/Home.aspx">EPSS Coworker Resources </Link>for more details
                            </div>
                        </div>
                    </div>
                    <div className="ml-4 bg-white rounded-md w-[35%]">
                        <div className='p-6'>
                            <span className='flex pb-2'>
                                <span><img src="../home_src_announcements.png" width="50px" height="40px" /></span>
                                <h1 className='px-4 font-medium text-2xl pl-2 font-semibold'>Annoucements/Successes</h1>
                            </span>
                            <div className='p-2 flex flex-row gap-4'>
                                <span><PGESquareCard
                                    classes='h-16 bg-[#e4e4e4] w-16'
                                    title="Feb" value="18" />
                                </span>
                                <p className=' gap-2 break-all'>
                                    {EPSSData.getAnnoucements()}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='p-4 bg-white '>
                    <span className='p-4'>
                        <h1 className='pb-4 inline-flex gap-1 font-semibold text-2xl'>Contacts </h1>
                    </span>
                    <div className='flex'>
                        <ContactCard msg="Need to request New Product, Enhancement or report Defect? Check out our services."
                            buttonLabel='Go to Services'
                            link="https://iis10t2prd.cloud.pge.com/MyITServices/" />
                        <ContactCard msg="Need general help? Drop us a mail at EPSS_dist_list@pge.com"
                            buttonLabel='Email Us'
                            link="mailto:EPSS_dist_list@pge.com" />
                    </div>
                </section>
                <section className='p-4 w-[98vw] bg-[#f5f5f5]'>
                    <span className='p-2'>
                        <h1 className='pb-4 inline-flex gap-1 font-semibold text-2xl'>Resources </h1>
                    </span>
                    <Resources link={"EPSS"} />
                </section>
                <section className='p-4 bg-white'>
                    <Faqs />
                </section>
            </div>
        </Layout >
    )
}