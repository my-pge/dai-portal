import type { Meta, StoryObj } from '@storybook/react';
import { PGETabView } from '../../../lib';

const meta = {
    title: 'Example/PGETabView',
    component: PGETabView,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof PGETabView>;

export default meta;
type Story = StoryObj<typeof meta>;

const content1 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt inculpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus";
const content2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemoenim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi"

export const Basic: Story = {
    args: {
        headers: ["header 1", "header 2"],
        contents: [content1, content2]
    }
}

export const Icons: Story = {
    args: {
        headers: ["header 1", "header 2"],
        contents: [content1, content2],
        leftIcons: ["pi pi-calendar mr-2", "pi pi-search mr-2"],
        rightIcons: ["pi pi-cog ml-2",],
    }
}

