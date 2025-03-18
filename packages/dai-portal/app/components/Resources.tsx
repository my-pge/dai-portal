/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ResourcesData } from '../../APIs/Resources';

type ResourcesProps = {
    link: string;
}
type resourceData = {
    id: string;
    name: string;
    link: string;
    desc: string;
}
export function Resources({ link }: ResourcesProps) {
    const [data, setData] = useState<resourceData[]>([]);

    useEffect(() => {
        const json = ResourcesData.getResources(link);
        setData(json || [])
    }, []);

    return (
        <div className="card w-[98%] p-4 bg-white " >
            <div className='justify-items-center'>
                <div className="w-[100%]" >
                    <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="name" header="Resource Name"
                            body={rowData => {
                                return (
                                    <a className="text-blue-500" href={rowData.link} >
                                        {rowData.name}
                                    </a>)
                            }}
                        ></Column>
                        <Column field="desc" header="Description"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    )
}