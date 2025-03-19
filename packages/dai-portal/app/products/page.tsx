"use client";
import Layout from '../components/Layout';
import CardsGrid, { CardItem } from './ProductCard';

export default function ProductsList() {
  const cards: CardItem[] = [
    {
      title: "Enhanced Powerline Safety Settings",
      value: "EPSS (Enhanced Powerline Safety Settings) is a wildfire mitigation program that started in 2021 to reduce ignitions by making grid settings more sensitive...",
      img: "./card_prd_EPSS.png",
      route: "/products/EPSS",
      category: "ELECTRIC"
    },
    {
      title: "Customer Outage Journey",
      value: "The goal of the Customer Outage Journey effort is to improve our customers' experience when they are impacted by a planned or unplanned electric outage...",
      img: "./card_prd_customerOutageJourney.png",
      route: "/products/COJ",
      category: "ELECTRIC",
    },
    {
      title: "Cloud RDBMS",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      img: "./card_prd_placeholder1.png",
      route: "/products/COJ",
      category: "GAS"
    },
    {
      title: "Customer Planned Outage Notification",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      img: "./card_prd_placeholder1.png",
      route: "/products/COJ",
      category: "CUSTOMER",
    },
    {
      title: "Data Ecosystem Operations",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      img: "./card_prd_placeholder1.png",
      route: "/products/COJ",
      category: "CUSTOMER",
    },
    {
      title: "Electric Transmission Operability Assessment",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      img: "./card_prd_placeholder1.png",
      route: "/products/COJ",
      category: "CUSTOMER",
    },
  ];

  return (
    <Layout background="rgb(237, 244, 255)">
      <section className="p-4 border-b-[1px] w-[98vw]">
        <p className="text-center flex">
          <span className="text-pretty inline-flex gap-1 px-4 py-4 text-4xl font-semibold">Products</span>
        </p>
        <div className="services pb-4 bg-white p-4 h-[100vh]">
          <CardsGrid cards={cards} />
        </div>
      </section>
    </Layout>
  );
}
