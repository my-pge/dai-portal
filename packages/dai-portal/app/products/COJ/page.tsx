/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import Layout from '../../components/Layout';
import { BreadCrumb } from 'primereact/breadcrumb';
import Link from 'next/link';
import { StandStrategy } from '@/app/components/StandStrategy';
import { ProductHeader } from '@/app/components/ProductHeader';
import { ContactCard } from '@/app/components/ContactCard';
import { COJData } from '../../../APIs/COJ'
import { Resources } from '@/app/components/Resources';
import { Faqs } from '@/app/components/Faqs';
import { PGESquareCard } from '@pge-fe-monorepo/pge-design-system/src/lib';

export default function COJ() {
    const items = [{ label: 'Products', template: () => <Link className='font-semibold text-blue-500' href="/products">Products</Link> }, { label: 'Customer Outage Journey' }]

    return (
        <Layout background='rgb(237,244,255)'>
            <div>
                <BreadCrumb model={items} />
                <section className='px-6 pt-4 flex'>
                    <ProductHeader title="Customer Outage Journey" type="ELECTRIC" color="red" />
                </section>
                <section className="flex p-4">
                    <div className='flex flex-column'><div className='px-6 py-4'>{COJData.getSummary()} </div>
                        <StandStrategy title="Rebuild Trust with our Customers" subTitle="True North Strategy" image="../prd_main_northStrategy.png" alt="EPSS" />
                        <StandStrategy title="It is enjoyable to work with and for PG&E" subTitle="Stand" image="../prd_main_stand.png" alt="EPSS" />
                    </div>
                    <img src="../prd_main_customerOutageJourney.png" alt="COJ" style={{ width: "650px", height: "430px" }} />

                </section>
                <section className="p-4 flex">
                    <div className="bg-white p-6 rounded-md w-[65%] ">
                        <span className='p-2'>
                            <h1 className='pb-4 inline-flex gap-1 font-semibold text-2xl'>Featured Video</h1>
                        </span>
                        <div className='flex'>
                            {/* <iframe width="350" height="200" src="../2024 Heart of the Customer Award.mp4"
                                tabIndex={0} allowFullScreen={true} role="document" style={{ zIndex: 4 }}></iframe> */}
                            <video width="320" height="240" controls poster="../prd_main_movie_CustOutageJourney.png">
                                <source src="../2024 Heart of the Customer Award.mp4" type="video/mp4" />
                            </video>
                            <div className='p-5'>
                                2024 Heart of the Customer Award.
                            </div>
                        </div>
                    </div>
                    <div className="ml-4 bg-white rounded-md w-[35%]">
                        <div className='p-6'>
                            <span className='flex'>
                                <span><img src="../home_src_announcements.png" alt="annoucement" width="50px" height="40px" /></span>
                                <h1 className='px-4 font-medium text-xl pl-2 font-semibold'>Annoucements/Successes</h1>
                            </span>
                            <div className='p-2 flex flex-row gap-4'>
                                <span><PGESquareCard
                                    classes='h-16 bg-[#e4e4e4] w-16'
                                    title="Feb" value="16" />
                                </span>
                                <p className=' gap-2 break-all'>
                                    {COJData.getAnnoucements()}
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='p-4 w-[98vw] bg-white '>
                    <span className='p-2'>
                        <h1 className='pb-4 inline-flex gap-1 font-semibold text-2xl'>Contact </h1>
                    </span>
                    <div className='flex'>
                        <ContactCard msg="Need to request New Product, Enhancement or report Defect? Check out our services."
                            buttonLabel='Go to Services'
                            link="https://iis10t2prd.cloud.pge.com/MyITServices/" />
                        <ContactCard msg="Need general help? Drop us a mail at CustOutJ_dist_list@pge.com"
                            buttonLabel='Email Us'
                            link="mailto:CustOutJ_dist_list@pge.com" />
                    </div>
                </section>
            </div>
            <section className='p-4 w-[98vw] bg-[#f5f5f5]'>
                <span className='p-2'>
                    <h1 className='pb-4 inline-flex gap-1 font-semibold text-2xl'>Resources </h1>
                </span>
                <Resources link={"COJ"} />
            </section>
            <section className='p-4 bg-white'>
                <Faqs />
            </section>
        </Layout >
    )
}