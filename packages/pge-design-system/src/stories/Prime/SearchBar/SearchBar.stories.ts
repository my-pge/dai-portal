import type { Meta, StoryObj } from '@storybook/react';
import { PGESearchbar } from '../../../lib';

const meta = {
    title: 'Example/PGESearchbar',
    component: PGESearchbar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof PGESearchbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {

    }
}



