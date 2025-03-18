import React, { useCallback, useState } from "react";
import { RadioButton } from 'primereact/radiobutton';
import { Divider } from 'primereact/divider';
import { Checkbox } from 'primereact/checkbox';
import { PGEDropdown, PGEMenubar } from "@pge-fe-monorepo/pge-design-system/src/lib";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { InputText } from 'primereact/inputtext';
import { useGlobalContext } from "src/context/globalContext";
import { Button } from "primereact/button";
import { URL } from "../services/config"

interface filterProps {
    data?: any[]
    setLeftVisible?: (value: boolean) => void;
    leftVisible?: boolean
}

export const Filter = () => {
    const { state, dispatch } = useGlobalContext();
    const [selectedPage, setSelectedPage] = useState("annual");
    const [filterCount, setFilterCount] = useState(0);
    const { leftVisible } = state;

    const handleClick = () => {
        dispatch({
            type: "setLeftVisible",
            payload: !leftVisible
        });
    }

    const end = (
        <button className={`filter-icon py-2 ${leftVisible ? 'rotate-0' : 'rotate-180'}`} onClick={handleClick}>
            <img src="./expand-icon.svg" alt="expand icon" /></button>

    );

    const capitalizeFirstLetter = (val: string) => {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
    const start = (<>
        <div className={`text-sm ${leftVisible ? 'rotate-0' : 'rotate-180'}`}>
            {!leftVisible && <>
                <span className="text-xs inline-block py-5 text-pge-blue"> Filters Applied ({filterCount})</span>
                <span className="text-xs py-5">{capitalizeFirstLetter(selectedPage)}</span></>} FILTER</div></>);

    const onFilterChange = (e: any, type: string) => {
        const { filterMultipleValue, filterSingleValue } = state

        if (Array.isArray(filterMultipleValue[type])) {
            if (e.checked) {
                filterMultipleValue[type].push(e.value);
                setFilterCount(filterCount + 1)
            } else {
                filterMultipleValue[type].splice(filterMultipleValue[type].indexOf(e.value), 1);
                setFilterCount(filterCount - 1)
            }
            dispatch({
                type: "setFilterMultiValue",
                payload: filterMultipleValue,
                mode: type
            });
        } else {
            filterSingleValue[type] = e.value;
            dispatch({
                type: "setFilterSingleValue",
                payload: filterSingleValue,
                mode: type
            });
            setFilterCount(filterCount + 1)
        }
    }

    const getDivision = () => {
        const values = state?.data?.map((d: any) => d?.division);
        return values;
    }

    const getServiceTerritory = () => {
        const values = state?.data?.map((d: any) => d?.serviceTerritoryName);
        return values.filter((f: string) => f !== undefined)
    }

    const postData = async (query: any) => {
        const request = new Request(`${URL}/query`, {
            method: "POST",
            body: JSON.stringify(query),
        });
        try {
            const response = await fetch(request);
            let newData = await response.json();
            if (newData.error) {
                throw new Error("failed")
            }
            dispatch({
                type: "setData",
                payload: newData
            });

        } catch (err: any) {
            console.log(err)
        }
    }

    const submit = () => {
        const { filterMultipleValue, filterSingleValue } = state;
        const singleKeys = Object.keys(filterSingleValue);
        const multiKeys = Object.keys(filterMultipleValue);
        let val: any = []
        singleKeys.map((sk: string) => {
            if (filterSingleValue[sk]) {
                val.push({
                    "type": "eq",
                    "field": sk,
                    "value": filterSingleValue[sk]
                })
            }
        });
        multiKeys.map((mk: string) => {
            if (filterMultipleValue[mk].length) {
                val.push({
                    "type": "in",
                    "field": mk,
                    "value": filterMultipleValue[mk]
                })
            }
        });
        const query = { "where": { "type": "and", "value": val } };
        postData(query)
    }

    return (
        <div className={`${leftVisible ? 'w-[20vw]' : '[writing-mode:vertical-rl]'} h-screen border-white border-r-4`} >
            {leftVisible ?
                <>
                    <PGEMenubar classes="sticky z-1 top-0 bg-slate-100 text-midnight" start={start} end={end} />
                    <div key='page' className="flex flex-col pt-1 text-xs overflow-y-scroll">
                        <div className="mr-auto px-2 py-1">
                            <RadioButton inputId="annual" name="page" value="annual"
                                onChange={(e) => setSelectedPage(e.value)} checked={selectedPage === "annual"} />
                            <label htmlFor="annual" className="ml-2">Annual</label>
                        </div>
                        <div className="mr-auto px-2">
                            <RadioButton inputId="secondPatrol" name="page" value="secondPatrol"
                                onChange={(e) => setSelectedPage(e.value)} checked={selectedPage === "secondPatrol"} />
                            <label htmlFor="secondPatrol" className="ml-2">Second Patrol</label>
                        </div>

                        <Divider />
                        <div className="pb-4 text-pge-blue">Filters Applied ({filterCount})</div>
                        <div className="flex flex-col text-xs pb-4">
                            <div className="flex flex-col pb-2 justify-evenly pr-2">
                                <label htmlFor="division" className="text-left ml-4 pb-2 text-xs font-semibold">Division</label>
                                <PGEDropdown classes="ml-4 text-xs h-12" value={state?.filterSingleValue?.division} values={getDivision()}
                                    optionLabel="division" setValue={e => onFilterChange(e, "division")} />
                            </div>
                            <div className="flex flex-col justify-evenly pr-2">
                                <label htmlFor="setviceTerritory" className="text-left ml-4 pb-2 text-xs font-semibold">Service Territory</label>
                                <PGEDropdown classes="ml-4 text-xs h-12" value={state?.filterSingleValue?.serviceTerritoryName} values={getServiceTerritory()}
                                    optionLabel="serviceTerritoryName" setValue={e => onFilterChange(e, "serviceTerritoryName")} />
                            </div>
                        </div>
                        <span className="flex px-4 pb-1 text-xs font-semibold">Completed Input</span>
                        <div className="flex flex-col text-xs">
                            <div className="mr-auto px-4 py-1"><Checkbox onChange={e => onFilterChange(e, "completedInput")} value="Yes"
                                checked={state?.filterMultipleValue?.["completedInput"].includes("Yes")} />
                                <label htmlFor="Yes" className="ml-2">Yes (3467)</label></div>
                            <div className="mr-auto px-4"><Checkbox onChange={e => onFilterChange(e, "completedInput")}
                                value="No" checked={state?.filterMultipleValue?.["completedInput"].includes("No")} />
                                <label htmlFor="No" className="ml-2">No (1)</label></div>
                        </div>
                        <span className="flex px-4 pt-4 pb-1 text-xs font-semibold">Recurring Project</span>
                        <div className="flex flex-col text-xs">
                            <div className="mr-auto px-4 py-1"><Checkbox onChange={e => onFilterChange(e, "recurringProject")}
                                checked={state?.filterMultipleValue?.["recurringProject"].includes("Yes")} value="Yes" />
                                <label htmlFor="Yes" className="ml-2">Yes (1467)</label></div>
                            <div className="mr-auto px-4"><Checkbox onChange={e => onFilterChange(e, "recurringProject")}
                                checked={state?.filterMultipleValue?.["recurringProject"].includes("No")} value="No" />
                                <label htmlFor="No" className="ml-2">No (1)</label></div>
                        </div>
                        <span className="flex px-4 pt-4 pb-1 text-xs font-semibold">Schedule Delays</span>
                        <div className="flex flex-col text-xs">
                            <div className="mr-auto px-4 py-1"><Checkbox onChange={e => onFilterChange(e, "scheduledDelays")}
                                value="Yes" checked={state?.filterMultipleValue?.["scheduledDelays"].includes("Yes")}></Checkbox>
                                <label htmlFor="Yes" className="ml-2">Yes (3347)</label></div>
                            <div className="mr-auto px-4"><Checkbox onChange={e => onFilterChange(e, "scheduledDelays")}
                                value="No" checked={state?.filterMultipleValue?.["scheduledDelays"].includes("No")}></Checkbox>
                                <label htmlFor="No" className="ml-2">No (5)</label></div>

                        </div>
                        <span className="flex px-4 pt-4 pb-1 text-xs font-semibold text-left">Previous Quarter</span>
                        <div className="flex flex-col text-xs">
                            <div className="mr-auto px-4 py-1"><Checkbox onChange={e => onFilterChange(e, "prevQuarter")}
                                checked={state?.filterMultipleValue?.["prevQuarter"].includes("q1")} value="q1" />
                                <label htmlFor="q1" className="ml-2">Q1 (1543)</label></div>
                            <div className="mr-auto px-4 pb-1"><Checkbox onChange={e => onFilterChange(e, "prevQuarter")}
                                checked={state?.filterMultipleValue?.["prevQuarter"].includes("q2")} value="q2" />
                                <label htmlFor="q2" className="ml-2">Q2 (1234)</label></div>
                            <div className="mr-auto px-4 pb-1"><Checkbox onChange={e => onFilterChange(e, "prevQuarter")}
                                checked={state?.filterMultipleValue?.["prevQuarter"].includes("q3")} value="q3" />
                                <label htmlFor="q3" className="ml-2">Q3 (345)</label></div>
                            <div className="mr-auto px-4"><Checkbox onChange={e => onFilterChange(e, "prevQuarter")}
                                checked={state?.filterMultipleValue?.["prevQuarter"].includes("q4")} value="q4" />
                                <label htmlFor="q4" className="ml-2">Q4 (460)</label></div>
                        </div>
                        <div className="flex flex-col text-xs pb-4 text-left p-2">
                            <div className="flex flex-col px-2 justify-evenly">
                                <label className="font-semibold py-2" htmlFor="projectName">Project Name</label>
                                <InputText id="projectName" aria-describedby="projectName-help" value={state?.filterSingleValue?.projectName}
                                    onChange={e => onFilterChange(e, "projectName")} />
                            </div>
                            <div className="flex flex-col px-2 justify-evenly">
                                <label className="font-semibold py-2" htmlFor="projectName">One VM Project Number</label>
                                <InputText id="projectName" aria-describedby="projectName-help" value={state?.filterSingleValue?.oneVmProjectNumber}
                                    onChange={e => onFilterChange(e, "oneVmProjectNumber")} />
                            </div>
                        </div>
                    </div><Button onClick={submit} label="Apply" /></> :
                <PGEMenubar classes="bg-slate-100 text-midnight" start={end} end={start} />
            }

        </div >
    );

}