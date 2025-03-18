import React from "react";
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { PGEDropdown } from "@pge-fe-monorepo/pge-design-system/src/lib";
import { useGlobalContext } from "src/context/globalContext";

type editFormProps = {
    data: any[]
}

export const EditForm = ({ data }: editFormProps) => {
    const { state } = useGlobalContext();
    const getContent = () => (
        <div className="text-xs">Please fill out the form carefully and thoroughly</div>
    );

    const projectNames = () => {
        const values = data?.map((d: any) => d.projectName);
        return values;
    }

    return (<div className="edit-form p-1 bg-slate-50 text-sm p-inputtext-sm">
        <div className='flex'>
            <h2 className='text-base font-semibold pb-4'>Annual Opreations Input</h2>
            <div className="ml-6 pb-4"><Message content={getContent()} severity="info" /></div>
        </div>
        <div className='flex'>
            <div className='flex flex-col pr-14'>
                <label htmlFor="ingredient1" className="pb-2 text-xs font-semibold">Project Name</label>
                <PGEDropdown classes="w-60" value={state?.selected?.projectName} values={projectNames()} optionLabel="projectName" />
            </div>
            <div className='flex flex-col pr-6'>
                <label htmlFor="ingredient1" className="pb-2 text-xs font-semibold">PI Start Date</label>
                <InputText value={state?.selected?.piStartDate} />
            </div>
            <div className='flex flex-col pr-6'>
                <label htmlFor="ingredient1" className="pb-2 text-xs font-semibold">PI End Date</label>
                <InputText value={state?.selected?.piEndDate} />
            </div>
            <div className='flex flex-col pr-6'>
                <label htmlFor="ingredient1" className="pb-2 text-xs font-semibold">Remove Project</label>
                <div className="flex flex-row">
                    <div className="flex align-items-center pr-4">
                        <RadioButton inputId="removeProjectNo" name="removeProject" value="No" checked={state?.selected?.removeProject === "No"} />
                        <label htmlFor="removeProjectNo" className="ml-2">No</label>
                    </div>
                    <div className="flex align-items-center">
                        <RadioButton inputId="removeProjectYes" name="removeProject" value="Yes" checked={state?.selected?.removeProject === "Yes"} />
                        <label htmlFor="removeProjectYes" className="ml-2">Yes</label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col pr-6'>
                <label htmlFor="ingredient1" className="pb-2 text-xs font-semibold">Planned Units</label>
                <InputNumber value={state?.selected?.plannedUnits} showButtons inputClassName="w-24" />
            </div>
        </div>
        <div className='flex pt-4'>
            <div className='flex flex-col pr-12'>
                <label htmlFor="ingredient1" className="pb-2 text-xs font-semibold">Reason for %increase from 3 years average</label>
                <PGEDropdown classes="w-60" value={state?.selected?.projectName} values={projectNames()} optionLabel="projectName" />
            </div>
            <div className='flex flex-col pr-6'>
                <label htmlFor="ingredient1" className="pb-2 text-xs font-semibold">TI Start Date</label>
                <InputText value={state?.selected?.ttStartDate} />
            </div>
            <div className='flex flex-col pr-6'>
                <label htmlFor="ingredient1" className="pb-2 text-xs font-semibold">TI End Date</label>
                <InputText value={state?.selected?.ttEndDate} />
            </div>
            <div className='flex flex-col pr-6'>
                <label htmlFor="ingredient1" className="pb-2 text-xs font-semibold">Planner Comments</label>
                <div className="flex flex-row w-60">
                    <InputText size="32" value={state?.selected?.piEndDate} />
                </div>
            </div>
        </div>
        <div className='flex pt-6'>
            <div className='flex flex-row'>
                <div className="pr-4"><Button label="Submit" /></div>
                <Button label="Cancel" outlined />
            </div>
        </div>
    </div >);

}