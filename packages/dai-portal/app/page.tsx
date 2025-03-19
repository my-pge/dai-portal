'use client'
import React from 'react';
import { Layout2Horizontal, PGEMedCard, PGESmallCard } from '@pge-fe-monorepo/pge-design-system/src/lib';
import { Button } from 'primereact/button';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { SlideShow } from './components/SlideShow';
import { Announcements } from './components/Announcements';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Page = () => {
  const router = useRouter();
  const handleAction = (page: string) => {
    router.push(page)
  }
  return (
    <>
      <Layout2Horizontal background='rgb(222, 241, 254)'>
        <Navbar />
        <><Banner />
          <section className='w-[98vw]'>
            <p className='text-center'>
              <span className='text-5xl font-semibold'>Services</span>
            </p>
            <div className='services p-4 place-items-center'>
              <div className='cards'>
                <PGEMedCard title="Critical Data Management"
                  img="./home_src_criticalData.png"
                  classes='h-28 bg-[#0C7DBB]'
                  tooltipKey="critical-dm"
                  desc="The focus is on deploying a data management Informatica Intelligent Data Management Cloud (IDMC) Platform and tool stack that is rationalized with the Enterprise Reference Architecture (ERA) and achieves functional parity with existing solutions such as Collibra Data Governance and Foundry Data Quality."
                  footer={<span ><a className='underline' target="new" href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514">Open a Ticket</a>
                  </span>} value={''} />

                < PGEMedCard title="Data EcoSystems Operations"
                  value=""
                  img="./home_src_dataEcosystems.png"
                  classes='h-28 bg-[#0C7DBB]'
                  tooltipKey='data-ecoop'
                  desc="Provide 24x 7 Monitoring Support for Foundry, Snowflake, Collibra and IDMC, Continuous Improvements, Product Intakes to DEO & Data Testing Hub."
                  footer={< span ><a className='underline' target="new" href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514">Open a Ticket</a>
                  </span>} />
                <PGEMedCard title="Data Solution Architecture Consultation"
                  value=""
                  img="./home_src_dataSolutionArch.png"
                  classes='h-28 bg-[#0C7DBB]'
                  tooltipKey='data-solArc'
                  desc="Team designs scalable data solutions to meet business needs, ensuring data integrity, security, and accessibility. We collaborate with stakeholders to align on their data strategies with organizational goals, driving innovation and efficiency."
                  footer={<span><a className='underline' target="new" href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514">Open a Ticket</a>
                  </span>} />

                <PGEMedCard title="Enterprise Data Engineering"
                  value=""
                  img="./home_src_dataEngg.png"
                  classes='h-28 bg-[#0C7DBB]'
                  tooltipKey='enterprise-dataEngg'
                  desc="Do you need data brought into the Enterprise Data Warehouse? Please submit a ticket."
                  footer={<span><a className='underline' target="new" href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514">Open a Ticket</a>
                  </span>} />

                <PGEMedCard title="Front End Consultation"
                  value=""
                  img="./home_src_frontendCons.png"
                  classes='h-28 bg-[#0C7DBB]'
                  tooltipKey='frontend'
                  desc="Front End Consultation team provides tailored Solution Architecture, Foundry/ PowerBI applications support , Design consultation and  Frontend Standards & Guidelines to ensure consistency, scalability and best practices across applications."
                  footer={<span><a className='underline' target="new" href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514">Open a Ticket</a>
                  </span>} />

                <PGEMedCard title="Value Management Office"
                  value=""
                  img="./home_src_business.png"
                  classes='h-28 bg-[#0C7DBB]'
                  tooltipKey='value-mo'
                  tp-position="left"
                  desc="BVM expertise is sought by teams to drive lasting program impacts for long term planning initiatives (e.g. TNS, GRC, BPD), produce 10x value realization outcomes, and timely execution of business requirements; Teams will then unlock additional leverage of their capabilities and drivers for growth potential."
                  footer={<span><a className='underline' target="new" href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514">Open a Ticket</a>
                  </span>} />

                <PGEMedCard title="Request a New Product or Enhancement"
                  value=""
                  img="./home_src_newProduct.png"
                  classes='h-28 bg-[#0C7DBB]'
                  footer={<span><a className='underline' target="new" href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514">Open a Ticket</a>
                  </span>} />

                <PGEMedCard title="Report an Issue or Need Additional Help"
                  value=""
                  img="./home_src_reportIssueHelp.png"
                  classes='h-28 bg-[#0C7DBB]'
                  footer={<span><a className='underline' target="new" href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514">Open a Ticket</a>
                  </span>} />
                <PGEMedCard title="Ticket Status"
                  value=""
                  img="./home_src_ticketStatus.png"
                  classes='h-28 bg-[#0C7DBB]'
                  footer={<span><a className='underline' target="new" href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514">Check Status</a>
                  </span>} />
              </div>
            </div>
            <div className="text-center">
              <button className='pge-button'
                onClick={() => handleAction('/services')}>View All Services</button>
            </div>
          </section>
          <></>
          <section className='mt-6 p-4 w-[100vw] bg-stone-100' style={{ background: 'rgb(243, 243, 243)' }}>
            <span className='text-center flex place-content-around'>
              <h1 className='inline-flex gap-1 px-4 py-4 text-5xl font-semibold'>Products</h1>
            </span>
            <div className='products p-4 mr-5'>
              <div className="sm-cards">
                <PGESmallCard title="126"
                  subTitle="Total Products"
                  img="./product_totalProducts.png"
                  classes='h-24 bg-[#0C7DBB]'
                  footer={<a href="/products">View </a>} />

                <PGESmallCard title="46"
                  subTitle="Customer Products"
                  img="./product_customer.png"
                  classes='h-24 bg-[#0C7DBB]'
                  footer={<a href="/products">View </a>} />
                <PGESmallCard title="38"
                  subTitle="Electric Products"
                  img="./product_electric.png"
                  classes='h-24 bg-[#0C7DBB]'
                  footer={<a href="/products">View </a>} />
                <PGESmallCard title="42"
                  subTitle="Gas Products"
                  img="./product_gas.png"
                  classes='h-24 bg-[#0C7DBB]'
                  footer={<a href="/products">View </a>} />

              </div>
            </div>

            <div className="text-center"><button className='pge-button'
              onClick={() => handleAction('/products')}>View All Products</button></div>
          </section>
          <section className='p-4 w-[100vw] bg-white'>

            <span className='text-center flex place-content-around'>
              <h1 id="highlights" className='inline-flex gap-1 px-4 py-4 font-semibold text-2xl'>DA&I Highlights</h1>
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
              <SlideShow />
              <div className='px-6'><Announcements /></div>
            </div>
          </section>


        </>
      </Layout2Horizontal >
    </>

  );
}

export default Page;