'use client'
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Divider } from 'primereact/divider';

export default function Faqs() {
    return (
        <Layout background='rgb(237,244,255)'>
            <section className='p-4 border-b-[1px] w-[98vw]'>
                <p className='text-center flex'>
                    <span className='text-pretty inline-flex gap-1 px-4 py-4 text-4xl font-semibold'>FAQs</span>
                </p>
                <section className='bg-white p-6' >
                    <div className='w-[80vw]'>
                        <span className="font-semibold text-md">What solutions does the DA&I team provide? How can I engage with your organization? </span>
                        <div className='pt-3 text-[#666]'>The DA&I organization builds and supports a variety of tools and services that can help you with the following. Browse through the Services links to see how we can help. It may also be helpful to look through our Product Pages to get an idea of what our teams have built and how you can leverage the information and data solutions we have provided so far.</div>
                        <Divider />
                        <span className="font-semibold text-md">I need help building a product. Where do I start?  </span>
                        <div className='pt-3 text-[#666]'>
                            <ul className='list-disc px-4'>
                                <li>DSA Office Hours. The Data Solution Architecture team conducts office hours every Thursday 3:00pm – 3:30pm.
                                    You can ask questions about the architecture of products in DA&I and any other questions you have about getting started.</li>
                                <li> Intake Form. The Intake Form of DA&I in Remedy is a great place to start if you are looking to see if our group can be of service. Click the Intake form option on the Homepage and the form will take you through a series of questions that can help you understand what you are looking for and how to proceed.
                                </li>
                                <li>Product Pages. Reviewing the product pages is a great start to understanding what DA&I has built and what is possible for you and your team’s goals.
                                </li>
                            </ul>
                        </div>
                        <Divider />
                        <span className="font-semibold text-md">How do I know what data is available for me to leverage?  </span>
                        <div className='pt-3 text-[#666]'>On the Homepage under Services, you will be able to click the button Data Services that connects you to the team responsible for Data Ontology. Here you will be able to see what data services you require and get in contact with the team who can help guide any requests. You can also browse our Product Pages to see how teams are already existing data at PG&E and see if any of these products contain existing information and insight you can leverage.  </div>
                        <Divider />
                        <span className="font-semibold text-md">What Data applications and tools are available for me to use?   </span>
                        <div className='pt-3 text-[#666]'>Palantir Foundry, Snowflake, and Collibra, are some of the tools our organization supports.
                            There are also tools such as Power BI or Tableau which PG&E offers and can be leveraged depending on your needs. Our Intake Form can better guide you on knowing where to start and how to think through what you may need from the DA&I organization. In addition to this, you can browse our Data Services to see where you can start in terms of planning for your next data project.

                        </div>
                        <Divider />
                        <span className="font-semibold text-md">Where do I go if I need help? </span>
                        <div className='pt-3 text-[#666]'>
                            <ul className='list-disc px-4'>
                                <li>
                                    <b>Office Hours.</b>
                                    <br />Our teams hold Office Hours weekly to help members across IT & Lines of Business.
                                    <br /><br />
                                    Here is the Office Hour schedule:
                                    <br />
                                    Data Solution Architecture: Thursdays 3:00 PM- 3:30 PM
                                    <br />
                                    Data Ecosystem Operations: Thursdays 10:00 AM- 10:30 AM
                                    <br />
                                    Ontology: Thursdays 9:30 AM- 10:00 AM
                                    <br /><br />

                                </li>
                                <li>
                                    <b>Support Emails. </b>
                                    <br />
                                    Below are the support emails currently available for certain platforms:
                                    <br />
                                    Foundry Operations: dca-foundry-ops@pge.com
                                    <br />
                                    Snowflake Operations: cloudrdbmsoperations@pge.com
                                    <br />
                                    Collibra Operations: collibraoperations@pge.com
                                    <br />
                                    Analytic Product Delivery & Front- End Operations: DAI_APD_Front_End_OpEx@pge.com
                                    <br /><br />

                                </li><li>
                                    <b>DA&I Remedy Front Door.</b> Click the Intake tile to go to our organization’s Front Door to submit new requests and get help.
                                    <br /><br />
                                </li><li>

                                    <b> Consultations.</b> Book a consultation with our organization leaders and team members to get guidance on Business Value, Architecture, Data Services, and more. Click the Consultation tile under the Homepage to see what your options are.
                                </li>
                            </ul>
                        </div>
                        <Divider />
                        <span className="font-semibold text-md">How does PG&E ensure quality and accuracy of data used?    </span>
                        <div className='pt-3 text-[#666]'>Both IT and the Lines of Business follow data governance practices to ensure data is accurate, consistent and up to date. The Data Governance Team in DA&I has resources that teams can leverage. Browse through the Data Services section to get more information about and request help.

                        </div>
                        <Divider />
                        <span className="font-semibold text-md">
                            How can I request a data analysis project?  </span>
                        <div className='pt-3 text-[#666]'>Please refer to the Intake Remedy form and include key details about your objective, desired outcomes, and relevant data sources to help us determine how to route and solution your request.

                        </div>
                        <Divider />
                        <span className="font-semibold text-md">Do you have standards and best practices other teams from the enterprise can leverage?    </span>
                        <div className='pt-3 text-[#666]'>Yes. The Enterprise Data Management team has created an Intro to Data Management Playbook which provides overviews of foundational data management capabilities. The Data Management Playbook Menu has been populated by the DA&I team. You can read through the detailed sections our teams have filled out to better understand the work we do and how we can help your team build data products.

                        </div>
                        <Divider />
                        <span className="font-semibold text-md">Does your organization have Data Scientists?   </span>
                        <div className='pt-3 text-[#666]'>Yes. The DA&I organization does have Data Scientists and Data Science projects. We also partner with other teams the Enterprise Protection, Data & Analytics (DPD&A) group who have Data Science projects as well. You can submit any requests in the Intake form, and we can see what skillsets are required for your use case. You can also book a consultation with the Data Solution Architecture team or attend their Office Hours to better understand what platform to leverage and how best to proceed.

                        </div>
                        <Divider />
                        <span className="font-semibold text-md">What if my team needs ongoing data support?    </span>
                        <div className='pt-3 text-[#666]'>If your team needs ongoing data support, you can submit a request in our Intake Form or book a consultation with one of our team members using the Consultation link. Please outline specific needs and we can discuss what is the best way to proceed, whether it’s a self-service tool you can leverage in our portfolio, a tool we build together, or operational support.

                        </div>
                        <Divider />
                        <span className="font-semibold text-md">How do I submit a data quality issue or who do I notify if I see something is wrong?   </span>
                        <div className='pt-3 text-[#666]'>If there are any issues with tools and applications that our organization supports, please fill out a Break fix request in the Remedy Front Door. If you see an issue with any business information such as incorrect data and are unsure who the data owner is, please submit a CAP item Enterprise Corrective Action Program (ECAP) - Home.

                        </div>
                        <Divider />
                    </div>
                </section>
            </section>
        </Layout>
    )
}