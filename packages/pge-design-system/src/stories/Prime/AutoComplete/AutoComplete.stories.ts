import type { Meta, StoryObj } from '@storybook/react';
import { PGEAutoComplete } from '../../../lib';
import { CountryService } from '../../../lib/service/CountryService';
import { ObjectItem } from '../../../types/types';

const meta = {
    title: 'Example/PGEAutoComplete',
    component: PGEAutoComplete,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    parameters: {
        docs: {
            description: {
                component: 'AutoComplete is an input component that provides real-time suggestions while being typed'
            },
        },
    },

} satisfies Meta<typeof PGEAutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;
const data: ObjectItem[] = CountryService.getCountries().data;
const groupedData: ObjectItem[] = CountryService.getGrouped().data as unknown as ObjectItem[];

export const Basic: Story = {
    parameters: {
        docs: {
            description: {
                story: 'AutoComplete is used as a controlled component with value and onChange properties. In addition, suggestions and a completeMethod are required to query the results.'
            },
        },
    },
    args: {
        items: data,
        value: "",
        field: "name",
    }
}

export const Grouped: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Option groups are specified with the optionGroupLabel and optionGroupChildren properties.'
            },
        },
    },
    args: {
        items: groupedData,
        groupedField: "label",
        value: "",
        field: "label"
    }
}

export const DropdownAndSearch: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Enabling dropdown property displays a button next to the input field where click behavior of the button is defined using dropdownMode property that takes blank or current as possible values. blank is the default mode to send a query with an empty string whereas current setting sends a query with the current value of the input.'
            },
        },
    },
    args: {
        items: data,
        value: "",
        field: "name",
        dropdown: true
    }
}

export const Multiple: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Multiple mode is enabled using multiple property used to select more than one value from the autocomplete. In this case, value reference should be an array. The number of values selectable can be restricted using the selectionLimit property.'
            },
        },
    },
    args: {
        items: data,
        value: "",
        field: "name",
        multiple: true
    }
}
