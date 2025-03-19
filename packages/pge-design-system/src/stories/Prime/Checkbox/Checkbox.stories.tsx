import type { Meta, StoryObj } from '@storybook/react';
import { PGECheckbox } from '../../../lib';

const meta = {
    title: 'Example/PGECheckbox',
    component: PGECheckbox,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof PGECheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const cities = [
    { name: 'New York', key: 'NY' },
    { name: 'Rome', key: 'RM' },
    { name: 'London', key: 'LDN' },
    { name: 'Istanbul', key: 'IST' },
    { name: 'Paris', key: 'PRS' }
];

export const Basic: Story = {
    args: {
        values: cities,
    }
};

export const Vertical: Story = {
    args: {
        values: cities,
        orientation: "vertical"
    }
};



