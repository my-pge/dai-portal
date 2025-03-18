import React from "react";
import { fieldKeys, Historical_Numbers, Overlapping_Programs, Outages_and_Ignitions, Mileage_and_Span_Information } from "../data/fields";
import { useGlobalContext } from "src/context/globalContext";
import { PGEMenubar } from "@pge-fe-monorepo/pge-design-system/src/lib";
import { Divider } from "primereact/divider";

type rightPanelProps = {
    setRightVisible?: (val: boolean) => void;
    rightVisible?: boolean
}
const mapField = (s: string) => {
    s = s.replace(/^_/, '');
    const result = s.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
}

export const RightPanel = () => {
    const { state, dispatch } = useGlobalContext();
    const { selected, rightVisible } = state;

    const handleClick = () => {
        console.log("CLICK", dispatch)
        
        dispatch({
            type: "setRightVisible",
            payload: !rightVisible
        });
    }
    const start = (
        <div className="flex"><button className={`${rightVisible ? 'rotate-180' : 'rotate-0'}`}
            onClick={handleClick}><img src="./expand-icon.svg" alt="Expand/collapse Icon" /></button>
            <div className={`text-sm ${rightVisible ? 'rotate-0 px-2' : 'rotate-180 py-2'}`}>SUPPLEMENT DATA</div></div>
    );

    return (
        <>
            <div className={`${rightVisible ? 'basis-1/6' : '[writing-mode:vertical-rl]'} h-screen border-white border-l-2`} >
                <PGEMenubar classes="sticky top-0 bg-slate-100 text-midnight" start={start} />
                {rightVisible &&
                    <div className="px-2 text-left basis-1/6 h-full" >
                        <span className="flex text-center p-2 pb-5"><span>{selected?.["projectName"]}</span>
                        </span>
                        <div className="pb-2 font-medium">Historical Numbers</div>
                        {
                            Historical_Numbers.map((val: any) => {
                                return <div className="flex justify-between pb-1 pr-2" key={val}>
                                    <div className="pb-1 text-xs w-32">{mapField(val)}</div>
                                    <div className="font-medium text-xs">{selected?.[val] || "--"} </div>
                                </div>;
                            })

                        }
                        <Divider />

                        <div className="pb-2 font-medium">Mileage and Span Information</div>
                        {
                            Mileage_and_Span_Information.map((val: any) => {
                                return <div className="flex justify-between pr-2" key={val}>
                                    <div className="pb-1 text-xs w-32">{mapField(val)}</div>
                                    <div className="font-medium text-xs">{selected?.[val] || "--"} </div>
                                </div>;
                            })

                        }
                        <Divider />

                        <div className="pb-2 font-medium">Outages and Ignitions</div>
                        {
                            Outages_and_Ignitions.map((val: any) => {
                                return <div className="flex justify-between pr-2" key={val}>
                                    <div className="pb-1 text-xs w-32">{mapField(val)}</div>
                                    <div className="font-medium text-xs">{selected?.[val] || "--"} </div>
                                </div>;
                            })

                        }
                        <Divider />

                        <div className="pb-2 font-medium">Overlapping Programs</div>
                        {
                            Overlapping_Programs.map((val: any) => {
                                return <div className="flex justify-between pr-2" key={val}>
                                    <div className="pb-1 text-xs w-32">{mapField(val)}</div>
                                    <div className="font-medium text-xs">{selected?.[val] || "--"} </div>
                                </div>;
                            })

                        }
                    </div>
                }
            </div>
        </>
    )
}