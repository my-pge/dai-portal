'use client';
import React, { ReactNode } from 'react';
import { Card } from 'primereact/card';
import './card.scss';


interface CardProps {
  title: string;
  value: string;
  subtitle?: string;
  footer?: ReactNode;
  header?: ReactNode;
  classes?: string
}

export const PGECard = ({ title, value, subtitle, header, footer, classes }: CardProps) => (
  <div className="card">
    <Card title={title} subTitle={subtitle} footer={footer} header={header} className={classes}>
      <p className="m-0">
        {value}
      </p>
    </Card>
  </div>
);
