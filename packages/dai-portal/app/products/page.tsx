
"use client";
import { PGECard } from '@pge-fe-monorepo/pge-design-system/src/lib';
import { useRouter } from 'next/navigation'
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Services() {
    const router = useRouter();
    const handleAction = (page: string) => {
        router.push(page)
    }
    return (
        <Layout background='rgb(237, 244, 255)'>
            <section className='p-4 border-b-[1px] w-[98vw]'>
                <p className='text-center flex'>
                    <span className='text-pretty inline-flex gap-1 px-4 py-4 text-4xl font-semibold'>Products</span>
                </p>

                <div className='services pb-4 bg-white p-4 h-[100vh] '>
                    {/* <div className="flex justify-center p-2"><PGESearchbar /></div> */}
                    <div className="cards-3 pt-4">
                        <PGECard title="EPSS (Enhanced Powerline Safety Settings)"
                            value='EPSS (Enhanced Powerline Safety Settings) is a wildfire mitigation program that started in 2021 to reduce ignitions by making grid settings more sensitive...'
                            img="./card_prd_EPSS.png"
                            classes='h-52 bg-[#E8F6FF] w-[400px]'
                            action={() => handleAction('/products/EPSS')}
                            footer={<span className='flex justify-between px-4 mt-[-15]'><Link href="/products/EPSS" > View Details</Link>
                                <span><span className="red dot"></span><span className='text-center text-gray-500 pl-1'>ELECTRIC</span></span></span>}
                        />

                        <PGECard title="Customer Outage Journey"
                            value="The goal of the Customer Outage Journey effort is to improve our customers' experience when they are impacted by a planned or unplanned electric outage..."
                            img="./card_prd_customerOutageJourney.png"
                            classes='h-52 bg-[#E8F6FF] w-[400px]'
                            action={() => handleAction('/products/COJ')}
                            footer={<span className='flex justify-between px-4 mt-[-15]'><Link href="/products/COJ" > View Details</Link>
                                <span><span className="red dot"></span><span className='text-center text-gray-500 pl-1'>ELECTRIC</span></span></span>}
                        />
                        <PGECard title="Cloud RDBMS (CR)"
                            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ..."
                            img="./card_prd_placeholder1.png"
                            classes='h-52 bg-[#E8F6FF] w-[400px]'
                            footer={<span className='flex justify-between px-4 mt-[-15]'><Link href="/products/COJ" > View Details</Link>
                                <span><span className="yellow dot"></span><span className='text-center text-gray-500 pl-1'>GAS</span></span></span>}
                        />
                        <PGECard title="CPON (Customer Planned Outage Notification)"
                            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ..."
                            img="./card_prd_placeholder1.png"
                            classes='h-52 bg-[#E8F6FF] w-[400px]'
                            footer={<span className='flex justify-between px-4 mt-[-15]'><Link href="/products/COJ" > View Details</Link>
                                <span><span className="blue dot"></span><span className='text-center text-gray-500 pl-1'>CUSTOMER</span></span></span>}
                        />
                        <PGECard title="Data Ecosystem Operations"
                            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ..."
                            img="./card_prd_placeholder1.png"
                            classes='h-52 bg-[#E8F6FF] w-[400px]'
                            footer={<span className='flex justify-between px-4 mt-[-15]'><Link href="/products/COJ" > View Details</Link>
                                <span><span className="blue dot"></span><span className='text-center text-gray-500 pl-1'>CUSTOMER</span></span></span>}
                        />
                        <PGECard title="Electric Transmission Operability Assess (OA)"
                            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ..."
                            img="./card_prd_placeholder1.png"
                            classes='h-52 bg-[#E8F6FF] w-[400px]'
                            footer={<span className='flex justify-between px-4 mt-[-15]'><Link href="/products/COJ" > View Details</Link>
                                <span><span className="blue dot"></span><span className='text-center text-gray-500 pl-1'>CUSTOMER</span></span></span>}
                        />


                    </div>
                </div>
            </section>

        </Layout >

    )

}