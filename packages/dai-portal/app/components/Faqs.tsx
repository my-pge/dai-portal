// app/components/Faqs.tsx
'use client'
import React from 'react';
import { Divider } from 'primereact/divider';

export type FAQ = {
  question: string;
  answer: string;
};

export type FaqsProps = {
  faqs?: FAQ[];
};

const defaultFaqs: FAQ[] = [
  {
    question: "FAQ I",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "FAQ II",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    question: "FAQ III",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
];

export function Faqs({ faqs }: FaqsProps) {
  const faqList = faqs && faqs.length ? faqs : defaultFaqs;

  return (
    <div className="card w-[100%] p-4 bg-white">
      <h1 className="pb-4 inline-flex gap-1 font-semibold text-2xl">FAQs</h1>
      <div className="card">
        {faqList.map((faq, index) => (
          <div key={index} className="w-[80vw] mb-4">
            <span className="font-semibold text-md">{faq.question}</span>
            <div className="pt-3 text-[#666]">
              {faq.answer}
            </div>
            {index !== faqList.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </div>
  );
}


/* 
<Accordion multiple activeIndex={[0]}>
    <AccordionTab header="FAQ I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="FAQ II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="FAQ III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>
*/ 
