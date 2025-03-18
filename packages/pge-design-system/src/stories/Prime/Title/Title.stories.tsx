import React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { PGETitle } from '../../../lib';
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { SplitButton } from "primereact/splitbutton";


const meta = {
    title: 'Example/PGETitle',
    component: PGETitle,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof PGETitle>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    }
];

const startContent = (
    <React.Fragment>
        <Button icon="pi pi-plus" className="mr-2" />
        <Button icon="pi pi-print" className="mr-2" />
        <Button icon="pi pi-upload" />
    </React.Fragment>
);

const centerContent = (
    <IconField iconPosition="left" >
        <InputIcon className="pi pi-search" />
        <InputText placeholder="Search" />
    </IconField>
);

const endContent = (
    <React.Fragment>
        <SplitButton label="Save" model={items} icon="pi pi-check" > </SplitButton>
    </React.Fragment>
);


export const Basic: Story = {
    args: {
        startContent,
        endContent
    }
};

