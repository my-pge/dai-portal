/* eslint-disable @next/next/no-img-element */
// app/components/StandStrategy.tsx
import React from 'react';

export type StandStrategyProps = {
  image?: string;
  title: string;
  subTitle: string;
  alt?: string;
};

const defaultStandImages: { [key: string]: string } = {
  "Rebuild Trust with our Customers": "../prd_main_northStrategy.png",
  "Catastrophic Wildfires Shall Stop": "../prd_main_stand.png",
  "It is enjoyable to work with and for PG&E": "../prd_main_stand.png",
};

export function StandStrategy({ image, title, subTitle, alt }: StandStrategyProps) {
  // Use provided image if exists; otherwise use mapped default
  const imageUrl = image || defaultStandImages[title] || "../prd_main_stand.png";
  const imageAlt = alt || title;

  return (
    <div className="px-6 py-2 flex">
      <span className="mt-2">
        <img src={imageUrl} alt={imageAlt} width="50px" height="50px" />
      </span>
      <span className="p-2">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="font-medium text-xl pl-2 font-semibold whitespace-normal">
            {title}
          </span>
          <span className="font-medium text-sm pl-2 text-gray-500 whitespace-normal">
            {subTitle}
          </span>
        </div>
      </span>
    </div>
  );
}
