'use client';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { dataprops, dataType } from '../../types/types';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';


export function PGETable({ data, cols, paginator, header, footer, showGridLine, stripedRows, filters, scrollable,
    allowExpansion, expandedRowIcon, collapsedRowIcon, rowExpansionTemplate, pageSize, total,
    rows = 5, rowOptions = [], globalFilterFields = [], selected, setSelected, displayRowFilter = false, customPaginator,
    visibleCols = cols, loadMoreData, disableMore = false
}: dataprops) {
    const [tableData, setTableData] = useState<dataType[]>(data);
    const [expandedRows, setExpandedRows] = useState();
    const dt = useRef<any>(null);
    const paginatorLeft = <span></span>;
    const rowCount = () => {
        if (total && pageSize) {
            const val = total - pageSize;
            return val > 1000 ? 1000 : total - pageSize;
        }
        return 0;
    }
    const paginatorRight = disableMore ? <Button type="button" onClick={loadMoreData} text >{`Load next ${rowCount()} (Total ${total})`}</Button> : <span></span>

    useEffect(() => {
        setTableData(data)
    }, [data]);

    const getContent = (value: string) => (
        <div className="flex align-items-center">
            <div>{value}</div>
        </div>
    );

    const itemTemplate = (option: any) => {
        const value = option?.["completedInput"] || "No";
        return <Message
            style={{
                border: 'solid white',
                borderWidth: '1px',
                height: '30px'
            }}
            content={getContent(value)} severity={value === "Yes" ? "success" : "error"} />;
    };
    const rowExpansionTemplateValue = () => {
        return rowExpansionTemplate
    }

    const exportCSV = (selectionOnly: any) => {
        dt?.current?.exportCSV?.({ selectionOnly });
    };

    const addProject = () => {

    }

    return (
        <><div className="p-2 justify-items-end">
            <Button label="Export CSV" text outlined onClick={() => exportCSV(false)} data-pr-tooltip="CSV" size="small" />
            <Button label="Add Project" text outlined onClick={() => addProject()} data-pr-tooltip="Add Project" size="small" />
        </div>
            <div className="card">
                <DataTable value={tableData} showGridlines={showGridLine} header={header} scrollable ref={dt} resizableColumns
                    onRowToggle={(e: any) => setExpandedRows(e?.data)} expandedRows={expandedRows} onRowExpand={(e) => setSelected?.(e?.data)}
                    scrollHeight="600px" rowExpansionTemplate={rowExpansionTemplateValue} expandedRowIcon={expandedRowIcon} collapsedRowIcon={collapsedRowIcon}
                    filterDisplay={displayRowFilter ? "row" : "menu"} selection={selected} selectionMode="single"
                    onSelectionChange={(e) => setSelected?.(e.value)} className="text-sm"
                    globalFilterFields={globalFilterFields} filters={filters}
                    paginator={paginator} rows={rows} rowsPerPageOptions={rowOptions}
                    emptyMessage="No matching data found."
                    stripedRows={stripedRows} footer={footer} tableStyle={{ maxWidth: '50rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                >

                    <Column expander={allowExpansion} />

                    {cols.map((col) => {
                        const field = col.key;
                        return <Column field={field} sortable={col.sortable} header={col.value} body={field === "completedInput" && itemTemplate}
                            filter={col.filter} style={{ minWidth: `${col.colWidth}` }}></Column>;
                    })}
                    {visibleCols.map((vcol) => {
                        const field = vcol.key;
                        return <Column field={field} sortable={vcol.sortable} header={vcol.value}
                            filter={vcol.filter} style={{ minWidth: `${vcol.colWidth}` }}></Column>;
                    })}


                </DataTable>
            </div>
        </>
    );
}
