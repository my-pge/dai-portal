import React from 'react';
import Layout from '@/app/components/Layout';
import { BreadCrumb } from 'primereact/breadcrumb';
import Link from 'next/link';
import { ProductHeader } from '@/app/products/ProductHeader';
import { StandStrategy } from '@/app/components/StandStrategy';
import { ContactCard } from '@/app/components/ContactCard';
import { Resources } from '@/app/components/Resources';
import { Faqs } from '@/app/components/Faqs';
import { PGESquareCard } from '@pge-fe-monorepo/pge-design-system/src/lib';
import { getProductByAcronym } from '@/APIs/ProductsPageData';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const acronym = params.acronym as string;
  const product = getProductByAcronym(acronym);

  if (!product) {
    return (
      <Layout background="rgb(237,244,255)">
        <div>Product not found</div>
      </Layout>
    );
  }

  const breadcrumbItems = [
    {
      label: 'Products',
      template: () => (
        <Link href="/products" className="font-semibold text-blue-500">
          Products
        </Link>
      ),
    },
    { label: product.name },
  ];

  return (
    <Layout background="rgb(237,244,255)">
      <div>
        <BreadCrumb model={breadcrumbItems} />
        <section className="px-6 pt-4 flex">
          <ProductHeader title={product.name} type="ELECTRIC" color="red" />
        </section>
        <section className="flex p-4">
          <div className="flex flex-column">
            <div className="px-6 py-4">{product.summary}</div>
            {product.stands.map((stand, index) => (
              <StandStrategy
                key={index}
                title={stand.title}
                subTitle={stand.subTitle}
                alt={stand.alt || stand.title}
              />
            ))}
          </div>
          <img src={product.image || '/placeholder.png'} alt={product.name} style={product.imageStyle} />
        </section>
        <section className="p-4 flex">
          <div className="bg-white p-6 rounded-md w-[65%]">
            <span className="p-2">
              <h1 className="pb-4 inline-flex gap-1 font-semibold text-2xl">Featured Video</h1>
            </span>
            <div className="flex">
              <iframe
                width="350"
                height="200"
                src={product.featuredVideo.src}
                tabIndex={0}
                allowFullScreen
                role="document"
                style={{ zIndex: 4 }}
              ></iframe>
              <div className="p-5">
                {product.featuredVideo.description}
              </div>
            </div>
          </div>
          <div className="ml-4 bg-white rounded-md w-[35%]">
            <div className="p-6">
              <span className="flex pb-2">
                <span>
                  <img src="/home_src_announcements.png" alt="Announcement" width="50px" height="40px" />
                </span>
                <h1 className="px-4 font-medium text-2xl pl-2 font-semibold">Announcements/Successes</h1>
              </span>
              <div className="p-2 flex flex-row gap-4">
                <span>
                  <PGESquareCard classes="h-16 bg-[#e4e4e4] w-16" title="Feb" value="18" />
                </span>
                <p className="break-all">{product.announcements}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-4 bg-white">
          <span className="p-4">
            <h1 className="pb-4 inline-flex gap-1 font-semibold text-2xl">Contacts</h1>
          </span>
          <div className="flex">
            {product.contacts.map((contact, idx) => (
              <ContactCard key={idx} msg={contact.msg} buttonLabel={contact.buttonLabel} link={contact.link} />
            ))}
          </div>
        </section>
        <section className="p-4 w-[98vw] bg-[#f5f5f5]">
          <span className="p-2">
            <h1 className="pb-4 inline-flex gap-1 font-semibold text-2xl">Resources</h1>
          </span>
          <Resources link={acronym} />
        </section>
        <section className="p-4 bg-white">
          <Faqs faqs={product.faqs} />
        </section>
      </div>
    </Layout>
  );
}
