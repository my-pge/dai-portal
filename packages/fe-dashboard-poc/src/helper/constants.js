import shortid from "shortid";

export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";
export const BUTTON = "button";

export const SIDEBAR_ITEMS = [
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            name: "Card",
            type: "card",
            draggable: true
        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            name: "Bar Chart",
            type: "barChart",
            draggable: true
        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            name: "Line Chart",
            type: "lineChart",
            draggable: true
        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            name: "Table",
            type: "table",
            draggable: true
        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            name: "Fitler",
            type: "filter",
            draggable: true
        }
    }
];
