'use client';
import React from 'react';
import { tagProps } from '../../types/types';
import { Tag } from 'primereact/tag';

export function PGETag({ value, severity, icon, rounded = false, style }: tagProps) {
    return (
        <Tag value={value} style={style} severity={severity} icon={icon} rounded={rounded}></Tag>
    )
}
