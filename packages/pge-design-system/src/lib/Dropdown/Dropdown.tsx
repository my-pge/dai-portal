'use client';
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import { ddProps } from "../../types/types";

export function PGEDropdown({ value, setValue, values, placeholderValue, optionLabel,
    checkmark, editable, filter, showClear, disabled, classes,
}: ddProps) {

    return (<Dropdown
        value={value}
        onChange={setValue}
        options={values}
        optionLabel={optionLabel}
        checkmark={checkmark}
        editable={editable}
        placeholder={placeholderValue}
        filter={filter}
        showClear={showClear}
        disabled={disabled}
        className={classes} />)

}