import type { Meta, StoryObj } from '@storybook/react';
import { PGEDropdown } from '../../../lib';
import { addLocale } from 'primereact/api';

const meta = {
    title: 'Example/PGEDropdown',
    component: PGEDropdown,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof PGEDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export const Basic: Story = {
    args: {
        values: cities,
        optionLabel: "name"
    }
};

export const Checkmark: Story = {
    args: {
        values: cities,
        optionLabel: "name",
        checkmark: true
    }
};

export const Editable: Story = {
    args: {
        values: cities,
        optionLabel: "name",
        editable: true
    }
};

export const Placeholder: Story = {
    args: {
        values: cities,
        optionLabel: "name",
        placeholderValue: "Select a City"
    }
};

export const Filter: Story = {
    args: {
        values: cities,
        optionLabel: "name",
        placeholderValue: "Select a City",
        filter: true
    }
};

export const ShowClear: Story = {
    args: {
        values: cities,
        optionLabel: "name",
        showClear: true
    }
};

export const LoadingState: Story = {
    args: {
        values: cities,
        optionLabel: "name",
        placeholderValue: "Loading..."
    }
};

export const Disabled: Story = {
    args: {
        values: cities,
        optionLabel: "name",
        disabled: true
    }
};

