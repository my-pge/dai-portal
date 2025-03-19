import type { Meta, StoryObj } from '@storybook/react';
import { ProductService } from '../../../lib/service/DataService';

import { PGETable } from '../../../lib';


const meta = {
    title: 'Example/PGETable',
    component: PGETable,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],

} satisfies Meta<typeof PGETable>;

export default meta;
type Story = StoryObj<typeof meta>;
const data = ProductService.getProductsData().slice(0, 5);
const allData = ProductService.getProductsData()

const header = "Products Header"
const footer = `In total there are ${data ? data.length : 0} products.`;

const cols = [{
    key: "name",
    value: "Name",
    sortable: false,
},
{
    key: "category",
    value: "Category",
    sortable: false,
},
{
    key: "code",
    value: "Code",
    sortable: false,
},
{
    key: "quantity",
    value: "quantity",
    sortable: false,
},]

export const Basic: Story = {
    args: {
        data,
        cols,
        showGridLine: true
    }
};

export const GridLines: Story = {
    args: {
        data,
        cols,
        showGridLine: true
    }
};

export const StripedRows: Story = {
    args: {
        data,
        cols,
        stripedRows: true
    }
};

export const HeaderAndFooter: Story = {
    args: {
        data,
        cols,
        header,
        footer
    }
};

export const Pagination: Story = {
    args: {
        data: allData,
        cols,
        paginator: true,
        rows: 5,
        rowOptions: [5, 10, 25, 50]
    }
}
const colsData = cols.map(col => ({ ...col, sortable: true, filter: true }));

export const Sortable: Story = {
    args: {
        data: allData,
        cols: colsData,
    }
}

export const Filter: Story = {
    args: {
        data: allData,
        cols: colsData,
        globalFilterFields: ["name", "category"]
    }
}
