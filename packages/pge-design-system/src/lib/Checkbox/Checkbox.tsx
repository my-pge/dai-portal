'use client';
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { cbProps } from "../../types/types";

export function PGECheckbox({ labels, values, selected = [values[0]], orientation = "horizontal" }: cbProps) {
    const [selectedCategories, setSelectedCategories] = useState(selected);


    const onCategoryChange = (e: any) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <div className={orientation === "horizontal" ? "flex flex-row gap-3" : "flex flex-column gap-3"} >
                {
                    values.map((value: any) => {
                        return (
                            <div key={value.key} className="flex align-items-center">
                                <Checkbox inputId={value.key} name="category" value={value} onChange={onCategoryChange}
                                    checked={selectedCategories.some((item: any) => item.key === value.key)} />
                                <label htmlFor={value.key} className="ml-2">{value.name}</label>
                            </div>
                        );
                    })
                }
            </div>
        </div >
    )
}