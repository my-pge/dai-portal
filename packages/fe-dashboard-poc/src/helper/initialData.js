import { COMPONENT, ROW, COLUMN } from "./constants";

export const initialData = {
    layout: [
        {
            type: ROW,
            id: "row0",
            children: [
                {
                    type: COLUMN,
                    id: "column0",
                    children: [
                        {
                            type: COMPONENT,
                            id: "component0"
                        }
                    ]
                },
                {
                    type: COLUMN,
                    id: "column1",
                    children: [
                        {
                            type: COMPONENT,
                            id: "component2"
                        }
                    ]
                }
            ]
        },
        {
            type: ROW,
            id: "row1",
            children: [
                {
                    type: COLUMN,
                    id: "column2",
                    children: [
                        {
                            type: COMPONENT,
                            id: "component3"
                        },
                        {
                            type: COMPONENT,
                            id: "component0"
                        },
                        {
                            type: COMPONENT,
                            id: "component4"
                        }
                    ]
                }
            ]
        }
    ],
    components: {
        component0: { id: "component0", type: "barChart", content: "bar chart" },
        component1: { id: "component1", type: "lineChart", content: "line chart" },
        component2: { id: "component2", type: "card", content: "card" },
        component3: { id: "component3", type: "card", content: "card" },
        component4: { id: "component4", type: "table", content: "table" }
    }
};

export const layout1 = {
    layout: [
        {
            type: ROW,
            id: "row0",
            children: [
                {
                    type: COLUMN,
                    id: "column0",
                    children: [
                        {
                            type: COMPONENT,
                            id: "card1"
                        }
                    ]
                },
                {
                    type: COLUMN,
                    id: "column1",
                    children: [
                        {
                            type: COMPONENT,
                            id: "card2"
                        }
                    ]
                },
                {
                    type: COLUMN,
                    id: "column2",
                    children: [
                        {
                            type: COMPONENT,
                            id: "card3"
                        }
                    ]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [
                        {
                            type: COMPONENT,
                            id: "card4"
                        }
                    ]
                }
            ]
        },
        {
            type: ROW,
            id: "row1",
            children: [
                {
                    type: COLUMN,
                    id: "column4",
                    children: [
                        {
                            type: COMPONENT,
                            id: "chart1"
                        }
                    ]
                },
                {
                    type: COLUMN,
                    id: "column5",
                    children: [
                        {
                            type: COMPONENT,
                            id: "chart2"
                        }
                    ]
                }
            ]
        },
        {
            type: ROW,
            id: "row2",
            children: [
                {
                    type: COLUMN,
                    id: "column6",
                    children: [
                        {
                            type: COMPONENT,
                            id: "table1"
                        },
                        {
                            type: COMPONENT,
                            id: "table2"
                        },
                    ]
                }
            ]
        }
    ],
    components: {
        card1: { id: "card1", type: "card", content: "bar chart" },
        card2: { id: "card2", type: "card", content: "line chart" },
        card3: { id: "card3", type: "card", content: "card" },
        card4: { id: "card4", type: "card", content: "card" },
        chart1: { id: "chart1", type: "barChart", content: "card" },
        chart2: { id: "chart2", type: "lineChart", content: "table" },
        table1: { id: "table1", type: "table", content: "bar chart" },
        table2: { id: "table2", type: "table", content: "line chart" }
    }
};
