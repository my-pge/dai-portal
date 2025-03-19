import React, { useCallback, useEffect, useRef, useState } from 'react';
import { vasadata } from "../data/data";
import { KPICard, PGEDropdown, PGETable, PGETag } from "@pge-fe-monorepo/pge-design-system/src/lib";
import { useGlobalContext } from 'src/context/globalContext';
import { EditForm } from './EditForm';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { FilterMatchMode } from 'primereact/api';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import { URL } from "../services/config"
import { Button } from 'primereact/button';


export const AdvancedTable = () => {
    const { state, dispatch } = useGlobalContext();
    const { data, selected, nextPageToken, totalCount, rightVisible, leftVisible, error } = state;
    const [fetchAll, setFecthAll] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const [pageSize, setPageSize] = useState(0)
    const toast = useRef(null);
    const dt = useRef(null);

    const showError = (error: string) => {
        const toastCur = toast.current as any;
        toastCur.show({ severity: 'error', summary: 'Error', detail: error, sticky: true });
    };

    const clearError = () => {
        const toastCur = toast.current as any;
        toastCur.clear();
    };

    const fetchData = useCallback(async () => {
        setShowLoader(true);
        try {
            const uri = nextPageToken ? `${URL}?pageToken=${nextPageToken}` : `${URL}`
            const response = await fetch(uri);
            let newData = await response.json();
            if (newData.error) {
                throw new Error("failed")
            }
            setShowLoader(false);
            dispatch({
                type: "addData",
                payload: newData
            });
            setPageSize(pageSize + 1000);
            setSelected(newData.data[0]);
        } catch (err: any) {
            setShowLoader(false);
            dispatch({
                type: "setError",
                payload: err
            });
            console.log(err)
            showError("Failed to load Data, please try again later!")
        }
    }, [nextPageToken]);

    useEffect(() => {
        if (!data?.length) fetchData()
    }, [data?.length, fetchData]);


    const cols = [
        {
            key: "completedInput",
            value: "Completed Input",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },
        {
            key: "projectName",
            value: "Last Year's Project Name",
            sortable: true,
            filter: false,
            colWidth: '200px'
        },
        {
            key: "oneVmProjectNumber",
            value: "Last Year's OVM Id",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },
        {
            key: "quarterAlignmentChange",
            value: "Quaters Alignment Change",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },

    ];
    const visibleCols = [
        {
            key: "division",
            value: "Division",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },
        {
            key: "prevQuarter",
            value: "Previous Quarter",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },
        {
            key: "_2024PiPlannedStart",
            value: "2024 PI Planned Start",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },
        {
            key: "_2024PiPlannedEnd",
            value: "2024 PI Planned End",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },
        {
            key: "_2024PiActualStart",
            value: "2024 PI Actual Start ",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },
        {
            key: "_2024PiActualEnd",
            value: "2024 PI Actual End ",
            sortable: true,
            filter: false,
        },
        {
            key: "_2024PlannedTtStart",
            value: "2024 Planned TT Start ",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },
        {
            key: "_2024PlannedTtEnd",
            value: "2024 Planned TT End ",
            sortable: true,
            filter: false,
            colWidth: '100px'
        },
    ];
    const [visibleColumns, setVisibleColumns] = useState<any>(visibleCols);
    const onColumnToggle = (event: { value: any; }) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = visibleCols.filter((col) => selectedColumns.some((sCol: { key: string; }) => sCol.key === col.key));
        console.log(orderedSelectedColumns)
        setVisibleColumns(orderedSelectedColumns);
    };
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const onGlobalFilterChange = (e: any) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const header = <div className="flex justify-content-end">
        <div><IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" tooltip={`Search in ${pageSize} records`} />
        </IconField>
        </div>

        {/* <MultiSelect optionLabel="value" value={visibleColumns}
            onChange={onColumnToggle} options={visibleCols} className="w-full sm:w-20rem" display="chip" /> */}

    </div>;

    const setSelected = (selected: any) => {
        dispatch({
            type: "setSelected",
            payload: selected
        });
    }

    useEffect(() => {
        setSelected(selected)
    }, [dispatch, selected]);



    return (<div style={{ width: !rightVisible && !leftVisible ? '95vw' : rightVisible && leftVisible ? '65vw' : '80vw' }}>
        <Toast ref={toast} position="top-right" />
        {showLoader && !nextPageToken ? <ProgressSpinner /> :
            <PGETable data={data} cols={cols} header={header} paginator={true} filters={filters}
                visibleCols={visibleColumns} scrollable={true} allowExpansion={true} expandedRowIcon="pi pi-pencil"
                collapsedRowIcon="pi pi-pencil" rowExpansionTemplate={<EditForm data={data} />} total={totalCount}
                pageSize={pageSize}
                selectionMode="single" setSelected={setSelected} selected={selected} displayRowFilter={false}
                rows={5} rowOptions={[5, 10, 25, 50, 100]} loadMoreData={fetchData} disableMore={!!nextPageToken}
                globalFilterFields={["prevQuarter", "oneVmProjectNumber"]} />
        }
    </div>
    );
}