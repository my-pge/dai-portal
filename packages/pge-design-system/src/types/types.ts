import { CSSProperties, ReactElement } from "react";

export type dataType = {
    properties: { [id: string]: any };
    rid: string;
}

export type colsType = {
    key: string;
    value: string;
    sortable?: boolean;
    filter?: boolean;
    colWidth?: string
}

export type dataprops = {
    data: any[];
    cols: colsType[];
    visibleCols?: colsType[];
    showGridLine?: boolean;
    header?: string | ReactElement;
    footer?: string;
    stripedRows?: boolean;
    paginator?: boolean
    rows?: number;
    total?: number;
    pageSize?: number;
    rowOptions?: number[]
    globalFilterFields?: string[];
    selectionMode?: string;
    setSelected?: (e: any) => void;
    selected?: {};
    displayRowFilter?: boolean;
    filters?: any;
    scrollable?: boolean;
    customPaginator?: boolean;
    loadMoreData?: () => void;
    disableMore?: boolean;
    allowExpansion?: boolean;
    collapsedRowIcon?: string;
    expandedRowIcon?: string;
    rowExpansionTemplate?: ReactElement<any, any>;
    dt?: HTMLElement
}
export interface ObjectItem {
    [key: string]: string | number;
}

export interface ItemsObject {
    label: string;
    value: string;
    items?: {
        label: string;
        value: string;
    }
}

export type acprops = {
    value: string;
    items: any[];
    suggestions?: any[];
    field?: string;
    multiple?: boolean;
    dropdown?: boolean;
    groupedField?: string;
    search?: (e: any) => void;
    setValue?: (e: any) => void;
    onChange?: (e: any) => void;
    classes?: string;
}

export type cprops = {
    date?: Date;
    setDate?: (e: any) => void;
    format?: string;
    locale?: string;
    showIcon?: boolean;
    selectionMode?: "range" | "multiple" | "single";
    hideOnRangeSelection?: boolean;
    showButtonBar?: boolean;
    disabled?: boolean;
    showTime?: boolean;
    hourFormat?: "12" | "24";
    timeOnly?: boolean;
}

export type ddProps = {
    values: any[];
    optionLabel: string;
    value?: string
    setValue?: (e: any) => void;
    placeholderValue?: string;
    checkmark?: boolean;
    editable?: boolean;
    filter?: boolean
    showClear?: boolean;
    disabled?: boolean;
    classes?: string;
}

export type snProps = {
    isExpanded: boolean;
    menu: any[];
    setIsExpanded?: () => void;
    classes?: string;
    noRetract?: boolean;
}

export type titleProps = {
    startContent?: JSX.Element | string;
    endContent?: JSX.Element | string;
    centerContent?: JSX.Element | string;
    classes?: string;
}

export type tvProps = {
    headers: any[];
    contents: any[];
    leftIcons?: string[];
    rightIcons?: string[];
    headerTemplates?: string[];
}

export type mbProps = {
    classes?: string;
    items?: any[];
    start?: JSX.Element;
    end?: JSX.Element;
    style?: CSSProperties
}

export type tagProps = {
    value: string;
    severity?: "success" | "info" | "warning" | "danger" | null | undefined;
    rounded?: boolean;
    icon?: string;
    style?: CSSProperties
}

export type checkbox = {
    name: string;
    key: string;
}

export type cbProps = {
    values: checkbox[]
    labels?: string[];
    selected?: any[];
    orientation?: "horizontal" | "vertical";
}

export type toastProps = {
    severity: string;
    message: string;
    detail?: string;
}