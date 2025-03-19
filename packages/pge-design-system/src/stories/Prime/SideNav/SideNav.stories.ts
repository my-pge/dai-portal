import type { Meta, StoryObj } from '@storybook/react';
import { SideNav } from '../../../lib';


const meta = {
    title: 'Example/SideNav',
    component: SideNav,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const menu = [
    {
        label: "Home",
        id: "1",
        icon: "pi pi-home",
    },
    {
        label: "Stats",
        id: "2",
        icon: "pi pi-chart-bar",
        items: [
            {
                label: "Quarterly reports",
                id: "2-a",
                items: [
                    {
                        label: "Human resources",
                        id: "2-a-1",
                    },
                    {
                        label: "Research",
                        id: "2-a-2",
                    },
                ],
            }
        ]
    },
    {
        label: "Settings",
        id: 3,
        icon: "pi pi-sliders-h",
    },
];


export const Basic: Story = {
    args: {
        isExpanded: false,
        menu
    }
};

