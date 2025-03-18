import type { Meta, StoryObj } from '@storybook/react';
import { PGECalendar } from '../../../lib';
import { addLocale } from 'primereact/api';

const meta = {
    title: 'Example/PGECalendar',
    component: PGECalendar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],

} satisfies Meta<typeof PGECalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar'
});

export const Basic: Story = {
    args: {
        date: new Date(),
    }
};

export const Format: Story = {
    args: {
        date: new Date(),
        format: "dd-M-yy"
    }
};

export const Icon: Story = {
    args: {
        showIcon: true,
    }
};

export const Range: Story = {
    args: {
        selectionMode: "range",
    }
};

export const Multiple: Story = {
    args: {
        selectionMode: "multiple",
    }
};

export const Locale: Story = {
    args: {
        locale: "es"
    }
};

export const ShowButtonBar: Story = {
    args: {
        showButtonBar: true
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const Time: Story = {
    args: {
        showTime: true
    }
};

export const TimeFormat: Story = {
    args: {
        showTime: true,
        hourFormat: "12"
    }
};