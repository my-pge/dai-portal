'use client';
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { acprops, ObjectItem } from "../../types/types";


export function PGEAutoComplete({ value, items, field = "", groupedField = "", multiple, onChange,
    dropdown, classes }: acprops) {
    const [data, setData] = useState<ObjectItem[]>([])
    const [acValue, setValue] = useState(value);

    const search = (event: any) => {
        setTimeout(() => {
            let _filteredItems;
            if (!event.query.trim().length) {
                _filteredItems = [...items];
            }
            else {
                _filteredItems = items?.filter((item: ObjectItem) => {
                    return item?.[field]?.toString().toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setData(_filteredItems);
        }, 250);
    }

    const groupedItemTemplate = (item: any) => {
        return (
            <div>
                <div>{item.label}</div>
            </div>
        );
    }

    return (
        <div className={multiple ? `card p-fluid text-left` : `flex justify-content-center`}>
            <AutoComplete value={value} suggestions={data} completeMethod={search}
                field={field} multiple={multiple} className={classes}
                optionGroupLabel={groupedField} optionGroupChildren="items"
                optionGroupTemplate={groupedItemTemplate}
                onChange={onChange} dropdown={dropdown} />
        </div>
    )
}