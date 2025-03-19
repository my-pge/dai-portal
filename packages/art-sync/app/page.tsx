'use client'
import React from 'react';
import { Layout2Horizontal } from '@pge-fe-monorepo/pge-design-system/src/lib';
import { Navbar } from './components/Navbar';
import { useRouter } from 'next/navigation';
import { Card } from './components/Card';
import { KPICard } from './components/KPICard';
import { LineChart } from './components/LineChart';


const Page = () => {
  const router = useRouter();
  const handleAction = (page: string) => {
    router.push(page)
  }
  return (
    <>
      <Layout2Horizontal background='rgb(179, 179, 179)'>
        <Navbar />
        <div className='overview'>
          <section className='rag place-items-center'>
            <div className="flex flex-wrap mb-2 px-5">
              <Card title='DA&I Org Rag Status - Red' subTitle='2/13/25 | end 25-1.1' classes="bg-[#a42222]" />
            </div>
            <div className="flex flex-col gap-3 px-5 place-items-center">
              <KPICard label="Wildfire ART Train" value="3 Products Red" lineColor="#ff5733" bgColor="rgba(255,241,240)" icon="redAlert.png" />
              <KPICard label="Data ART Train" value="All Green" lineColor="rgba(128, 202, 136)" bgColor="rgba(236,249,241)" icon="greenCheck.jpeg" />
            </div>

          </section>
          <section className='graph pt-4'>
            <LineChart />
          </section>
          <section className='table'>

          </section>
        </div>
      </Layout2Horizontal >
    </>

  );
}

export default Page;