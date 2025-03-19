
"use client";
import { PGECard } from '@pge-fe-monorepo/pge-design-system/src/lib';
import { useRouter } from 'next/navigation'
import Layout from '../components/Layout';

export default function Services() {
    const router = useRouter();
    const handleAction = (page: string) => {
        router.push(page)
    }
    return (

        <Layout background='rgb(237, 244, 255)'>
            <section className='p-4 border-b-[1px] w-[90vw]'>
                <p className='text-center flex'>
                    <span className='text-pretty inline-flex gap-1 px-4 py-4 text-4xl font-semibold'>Services</span>
                </p>

                <div className='services pb-4 bg-white p-4'>
                    <div className='cards-3'>
                        <PGECard title="Critical Data Management"
                            value={<span>The focus is on deploying a data management Informatica Intelligent Data Management Cloud (IDMC) Platform and tool stack that is rationalized with the Enterprise Reference Architecture (ERA) and achieves functional parity with existing solutions such as <span style={{ color: '#ED9405' }}>Collibra Data Governance</span> and <span style={{ color: '#ED9405' }}>Foundry Data Quality.</span></span>}
                            img="./ic_servicePage_criticalData.png"
                            classes='h-72 bg-[#E8F6FF]'
                            footer={<span><a href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514" target="new">Open a Ticket</a>
                            </span>} />

                        <PGECard title="Data Ecosystems Operations"
                            value={<span>Provide 24x 7 Monitoring Support for Foundry, Snowflake, Collibra and IDMC, Continuous Improvements, Product Intakes to DEO & Data Testing Hub.</span>}
                            img="./ic_servicePage_dataEcosystems.png"
                            classes='h-72 bg-[#E8F6FF]'
                            footer={<span><a href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514" target="new">Open a Ticket</a>
                            </span>} />

                        <PGECard title="Data Solution Architecture Consultation"
                            value={<span>Team designs scalable data solutions to meet business needs, ensuring data integrity, security, and accessibility. We collaborate with stakeholders to align on their data strategies with organizational goals, driving innovation and efficiency.</span>}
                            img="./ic_servicePage_dataSolutionArch.png"
                            classes='h-72 bg-[#E8F6FF]'
                            footer={<span><a href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514" target="new">Open a Ticket</a>
                            </span>} />

                        <PGECard title="Enterprise Data Engineering"
                            value={<span>Do you need data brought into the Enterprise Data Warehouse? Please sumbit a ticket.</span>}
                            img="./ic_servicePage_dataEngg.png"
                            classes='h-72 bg-[#E8F6FF]'
                            footer={<span><a href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514" target="new">Open a Ticket</a>
                            </span>} />

                        <PGECard title="Front End Consultation"
                            value={<span>Front End Consultation team provides tailored Solution Architecture, Foundry/ PowerBI applications support , Design consultation and  Frontend Standards & Guidelines to ensure consistency, scalability and best practices across applications.</span>}
                            img="./ic_servicePage_frontend.png"
                            classes='h-72 bg-[#E8F6FF]'
                            footer={<span><a href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514" target="new">Open a Ticket</a>
                            </span>} />
                        <PGECard title="Value Management Office"
                            value={<span>BVM expertise is sought by teams to drive lasting program impacts for long term planning initiatives (e.g. TNS, GRC, BPD), produce 10x value realization outcomes, and timely execution of business requirements; Teams will then unlock additional leverage of their capabilities and drivers for growth potential.</span>}
                            img="./ic_servicePage_business.png"
                            classes='h-72 bg-[#E8F6FF]'
                            footer={<span><a href="https://iis10t2prd.cloud.pge.com/MyITServices/forms/intake/1514" target="new">Open a Ticket</a>
                            </span>} />


                    </div>
                    <div className='cards-3 pt-5'>
                        <PGECard title="Request a New Product or Enhancement"
                            value=""
                            img="./ic_servicePage_newProduct.png"
                            classes='h-44 bg-[#E8F6FF]'
                            footer={<span><a href="https://iis10t2prd.cloud.pge.com/MyITServices/" target="new">Open a Ticket</a>
                            </span>} />
                        <PGECard title="Report anIssue or Need Additional Help"
                            value=""
                            classes='h-44 bg-[#E8F6FF]'
                            img="./ic_servicePage_reportIssue.png"
                            footer={<span><a href="https://iis10t2prd.cloud.pge.com/MyITServices/" target="new">Open a Ticket</a>
                            </span>} />
                        <PGECard title="Ticket Status"
                            value=""
                            img="./ic_servicePage_ticketStatus.png"
                            classes='h-44 bg-[#E8F6FF]'
                            footer={<span><a href="https://iis10t2prd.cloud.pge.com/MyITServices/" target="new">Check Status</a>
                            </span>} />
                    </div>
                </div>
            </section>
        </Layout >

    )

}