'use client';

import { Menubar } from 'primereact/menubar';
import { mbProps } from '../../types/types';
import "./Menubar.css";
export function PGEMenubar({ classes, items, start, end, style }: mbProps) {
    return (
        <div className={classes}>
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}