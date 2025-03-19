import type { Meta, StoryObj } from '@storybook/react';
import { PGEMenubar } from '../../../lib';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { useRef } from 'react';

const meta = {
    title: 'Example/PGEMenubar',
    component: PGEMenubar,
    tags: ['autodocs'],
} satisfies Meta<typeof PGEMenubar>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
];


export const Basic: Story = {
    args: {
        items
    }
}
const end = (
    <div className="flex align-items-center gap-2">
        <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
    </div>
);
const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

export const Template: Story = {
    args: {
        items,
        start,
        end
    }
}

const newItems = items.map(item => ({
    ...item,
    command: () => alert(`${item.label} clicked`)
}));
export const Command: Story = {
    args: {
        items: newItems,
        start,
        end
    }
}

const routerItems = [
    {
        label: 'React',
        icon: 'pi pi-home',
        url: 'https://react.dev/'
    },
    {
        label: 'Vite',
        icon: 'pi pi-star',
        url: 'https://vitejs.dev/'
    },

];

export const Router: Story = {
    args: {
        items: routerItems,
        start,
        end
    }
}