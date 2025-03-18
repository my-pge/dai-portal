import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { AnnoucementService } from '../../APIs/AnnoucementService';
import { PGESquareCard } from '@pge-fe-monorepo/pge-design-system/src/lib';

export function Annoucements() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        AnnoucementService.getProductsSmall().then((data) => setProducts(data?.slice(0, 5)));
    }, []);

    const getSeverity = (item: { inventoryStatus: string; }) => {
        switch (item.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (item: { id: string; name: string, date: string, month: string }, index: number) => {
        return (
            <div className="col-6 px-4" key={item.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-2 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <PGESquareCard
                        classes='h-16 bg-[#e4e4e4] w-16'
                        title={item.month} value={item.date} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1">

                        <div className="flex flex-column align-items-center sm:align-items-start gap-1">
                            <div className="text-l font-bold text-900">{item.name}</div>
                            <p className='break-all'> Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>

                    </div>
                </div>
            </div >
        );
    };

    const listTemplate = (items: any[]) => {
        if (!items || items.length === 0) return null;

        const list = items.map((product, index) => {
            return itemTemplate(product, index);
        });

        return <div className="grid grid-nogutter">{list}</div>;
    };

    return (
        <div className="card bg-white pb-4" style={{ width: '750px' }}>
            <span className='flex flex-col'>
                <span className='justify-items-center'><img src="../home_src_announcements.png" width="50px" height="40px" /></span>
                <span className='justify-items-center p-4 '><h1 className='px-4 font-medium text-xl pl-2 font-semibold'>Annoucements</h1></span>
            </span>
            <DataView value={products} listTemplate={listTemplate} />
        </div>
    )
}
