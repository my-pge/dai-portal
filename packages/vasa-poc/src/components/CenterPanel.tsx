import React, { useCallback, useEffect, useRef } from "react";
import { AdvancedTable } from "./AdvancedTable";
import { KPICard } from "@pge-fe-monorepo/pge-design-system/src/lib";
import { URL } from "../services/config"
import { useGlobalContext } from "src/context/globalContext";
import { KPI, ObjectMap } from "src/types";

const queries = [`{"aggregation":[{"type":"count", "name":"count"}], 
    "where":{"type":"eq","field":"completedInput","value":"No"}}`,
    `{"aggregation":[{"type":"count", "name":"count"}], 
    "where":{"type":"eq","field":"completedInput","value":"Yes"}}`,
    `{"aggregation":[{"type":"sum", "name":"sum", "field":"plannedUnits"}]}`,
    `{"aggregation":[{"type":"count", "name":"count"}], 
    "where":{"type":"eq","field":"quarterAlignmentChange","value":"Yes"}}`
]
const queryFor = ["incomplete", "complete", "totalPlanned", "quarterAlignment"];

export const CenterPanel = () => {
    const { state, dispatch } = useGlobalContext();
    const { incomplete, complete, totalPlanned, quarterAlignment } = state.KPI;
    let KPIs: KPI = {
        incomplete: 0,
        complete: 0,
        totalPlanned: 0,
        quarterAlignment: 0
    };

    const fetchData = useCallback(async (query: string, qFor: any) => {
        try {
            const timestamp = Date.now() + ((Math.random() * 100000).toFixed())
            const response = await fetch(`${URL}/aggregate?t=${timestamp}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: query,
            })
            let newData = await response.json();
            // eslint-disable-next-line react-hooks/exhaustive-deps
            KPIs = { ...KPIs, [qFor]: newData.data[0].metrics[0].value }
            if (newData.error) {
                throw new Error("failed")
            }
            dispatch({
                type: "setKpi",
                payload: KPIs
            });

        } catch (err: any) {
            dispatch({
                type: "setError",
                payload: err
            });
            console.log(err)
        }
    }, []);

    useEffect(() => {
        queries.forEach((query, index) => {
            setTimeout(() => {
                fetchData(query, queryFor[index])
            }, index * 100); // Delay increases with the index
        });
    }, [])
    return (
        <>
            <div className="flex flex-wrap gap-4 p-4">
                <KPICard label="Need Attention - imcomplete" value={incomplete} lineColor="#ff5733" bgColor="rgba(255,241,240)" subLabel="Projects" />
                <KPICard label="Completed Input" value={complete} lineColor="rgba(99, 156, 245)" bgColor="rgba(235,243,254)" />
                <KPICard label="Total Planned units" value={totalPlanned} lineColor="rgba(99, 156, 245)" bgColor="rgba(235,243,254)" />
                <KPICard label="Quarter alignment changes" value={quarterAlignment} lineColor="rgba(99, 156, 245)"
                    bgColor="rgba(235,243,254)" subLabel="Projects with quarter changes" />
            </div>
            <AdvancedTable />
        </>
    )

}