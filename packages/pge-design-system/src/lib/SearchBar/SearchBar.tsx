'use client';
import React from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';

export function PGESearchbar() {
    return (
        <div className="card">
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText placeholder="Search" />
            </IconField>
        </div>
    )
}
