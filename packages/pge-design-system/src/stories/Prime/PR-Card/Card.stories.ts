import type { Meta, StoryObj } from '@storybook/react';


import { PGECard } from '../../../lib/Card/Card';

const meta = {
  title: 'Example/PGECard',
  component: PGECard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PGECard>;


export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    title: "test",
    value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    subtitle: "",
    header: "",
    footer: ""
  },
};
export const subtitle: Story = {
  args: {
    title: "test",
    value: "20223",
    subtitle: "Card subtitle",
    header: "",
    footer: ""
  },
};

