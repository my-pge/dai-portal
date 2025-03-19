import { MUICard } from "../../lib/Card";
import { MUICharts } from "../../lib/Charts";
import MUITable from "../../lib/Table";
import FilterPanel from "../../lib/FilterPanel";
import BasicSelect from "../../lib/Select";
import CheckboxLabels from "../../lib/Checkbox";
import ComboBox from "../../lib/ComboBox";

export const getComponents = (type: string) => {
    switch (type.toLocaleLowerCase()) {
        case "card":
            return (<MUICard title="title" value="value" editable={true} />)
        case "linechart":
            return (<MUICharts type={'line'} chartData={[]} />);
        case "barchart":
            return <MUICharts type={'bar'} chartData={[]} />
        case "table":
            return <MUITable />
        case "filter":
            return <FilterPanel />
        case "select":
            return <BasicSelect />
        case "checkbox":
            return <CheckboxLabels />
        case "combobox":
                return <ComboBox />
    }

}