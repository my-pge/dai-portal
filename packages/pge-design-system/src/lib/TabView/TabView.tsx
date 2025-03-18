'use client';
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { tvProps } from '../../types/types';

export function PGETabView({ headers, contents, leftIcons, rightIcons, headerTemplates }: tvProps) {
    return (
        <div className="card">
            <TabView>
                {headers.map((header, index) => {
                    return (<TabPanel header={header} leftIcon={leftIcons?.[index]} rightIcon={rightIcons?.[index]} headerTemplate={headerTemplates?.[index]}>
                        <p className="m-0">
                            {contents[index]}
                        </p>
                    </TabPanel>)
                })}

            </TabView>
        </div>
    )
}
