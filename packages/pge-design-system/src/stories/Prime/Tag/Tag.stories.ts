import type { Meta, StoryObj } from '@storybook/react';
import { PGETag } from '../../../lib';

const meta = {
    title: 'Example/PGETag',
    component: PGETag,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof PGETag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        value: "Basic"
    }
}

export const Severity: Story = {
    args: {
        value: "Severity",
        severity: "success"
    }
}

export const Rounded: Story = {
    args: {
        value: "Rounded",
        severity: "success",
        rounded: true,
    }
}


export const Icon: Story = {
    args: {
        value: "Icon",
        severity: "success",
        rounded: true,
        icon: "pi pi-check"
    }
}

export const WithCustomStyle: Story = {
    args: {
        value: "With Custom style",
        style: { background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)' }
    }
}