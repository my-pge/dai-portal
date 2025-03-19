'use client';
import { Calendar } from 'primereact/calendar';
import { cprops } from '../../types/types';
import { useState } from 'react';

export function PGECalendar({ date, setDate, format, locale, showIcon = false, selectionMode,
    showButtonBar, disabled, showTime, timeOnly, hourFormat
}: cprops) {
    const [value, setValue] = useState(date);
    const [dates, setDates] = useState(null);


    return (
        <div className="card flex justify-content-center">
            {selectionMode === "multiple" || "range" ?
                <Calendar value={dates} onChange={(e: any) => setDates(e.value)}
                    dateFormat={format} locale={locale} showIcon={showIcon} selectionMode={selectionMode}
                    showButtonBar={showButtonBar} disabled={disabled} showTime={showTime} hourFormat={hourFormat}
                    hideOnRangeSelection={true} readOnlyInput={true} /> :
                <Calendar value={value} onChange={(e: any) => setValue(e.value)} showTime={showTime} hourFormat={hourFormat}
                    dateFormat={format} locale={locale} showIcon={showIcon} showButtonBar={showButtonBar} disabled={disabled} />
            }
        </div>

    )
}