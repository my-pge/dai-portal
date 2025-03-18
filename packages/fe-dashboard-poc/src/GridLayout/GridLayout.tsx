import { FunctionComponent, useState, useEffect, SetStateAction } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import CloseIcon from '@mui/icons-material/Close';
import { initialLayout } from "./initialLayout"
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../../styles/styles.scss";
import { getComponents } from "./Component";
import IconButton from "@mui/material/IconButton";
import { AppBar, Toolbar } from "@mui/material";
import { SIDEBAR_ITEMS } from "../helper/constants";
import DroppableComponents from "./DroppableComponents";
import { Title } from "@"
import FilterPanel from "../../lib/FilterPanel";



interface Props {
    domElements: any[];
    className?: string;
    rowHeight?: number;
    onLayoutChange?: (layout: any, layouts: any) => void;
    cols?: { [P: string]: number } | undefined;
    breakpoints?: any;
    containerPadding?: [number, number] | undefined;
}
type compactType = {
    type?: "vertical" | "horizontal" | null | undefined;
}
export type LayoutProps = {
    name: string;
    id: string;
    type: string;
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const layoutApi = "http://localhost:3030/gridLayoutData";

const GridLayout: FunctionComponent<Props> = (props) => {
    const [gridLayout, setGridLayout] = useState<LayoutProps[]>([]);
    const [layouts, setLayouts] = useState<{ [index: string]: any[] }>({});
    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("lg");
    const [compactType, setCompactType] = useState<compactType["type"]>("horizontal");
    const [mounted, setMounted] = useState(false);
    const [toolbox, setToolbox] = useState<{ [index: string]: any[] }>({
        lg: []
    });

    const fetchData = async () => {
        const data = await fetch(layoutApi);
        const json = await data.json();
        setGridLayout(json.res.gridLayout);
        // setLayouts(json.res.layouts)
    }
    useEffect(() => {
        fetchData()
        setMounted(true);

    }, []);

    const onBreakpointChange = (breakpoint: any) => {
        setCurrentBreakpoint(breakpoint);
        setToolbox({
            ...toolbox,
            [breakpoint]: toolbox[breakpoint] || toolbox[currentBreakpoint] || []
        });
    };

    const onCompactTypeChange = () => {
        let oldCompactType = "";

        const compactType =
            oldCompactType === "horizontal"
                ? "vertical"
                : oldCompactType === "vertical"
                    ? null
                    : "horizontal";
        setCompactType(compactType);
    };


    const onLayoutChange = (layout: any, layouts: any) => {
        //saveToLS("layouts", layouts);
        setLayouts({ ...layouts });
    };

    const onDrop = (layout: any, layoutItem: any, _ev: any) => {
        const fromDrag = JSON.parse(_ev.dataTransfer.getData("text"));
        const newGridLayoutItem = {
            id: fromDrag.id,
            name: fromDrag?.component?.name,
            type: fromDrag?.component?.type
        }

        setGridLayout([...gridLayout, newGridLayoutItem])
        layout.concat({
            i: "n" + layout.length,
            x: layoutItem.x,
            y: layoutItem.y,
            w: 2,
            h: 4,
        });

        console.group(layouts)
    };

    useEffect(() => {
        setLayouts({
            lg: _.map(gridLayout, function (item, i) {
                return {
                    x: i,
                    y: 0,
                    w: 2,
                    h: 4,
                    i: i.toString()
                };
            })
        })
    }, [gridLayout])

    function saveToLS(key: string, value: any) {
        if (global.localStorage) {
            global.localStorage.setItem(
                "rgl-7",
                JSON.stringify({
                    [key]: value
                })
            );
        }
    }
    const remove = (event: any, id: string) => {
        event?.stopPropagation()
        _.remove(gridLayout, function (item) {
            return item.id === id
        });
        setLayouts({ ...layouts });

    }
    
    const generateDOM = () => {
        return _.map(gridLayout, function (l, i) {
            return (
                <div className="grid-layout-container"
                    key={i}
                >
                    <IconButton color="primary" style={{ padding: '4px', position: "absolute", right: "2px", top: 0, cursor: "pointer" }}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()} onClick={(e) => remove(e, l.id)}>
                        <CloseIcon />
                    </IconButton>
                    {getComponents(l?.type)}

                </div >
            );
        });
    };

    return (
        <>
        <Title />
            {/* <FilterPanel /> */}
            <div style={{ padding: '16px', marginTop: '64px', marginRight: '60px',  }}>
                <ResponsiveReactGridLayout
                    {...props}
                    style={{ background: "#fff", height: "100vh" }}
                    layouts={layouts}
                    autoSize={true}
                    margin={[20, 20]}
                    measureBeforeMount={false}
                    useCSSTransforms={mounted}
                    compactType={compactType}
                    preventCollision={!compactType}
                    onLayoutChange={onLayoutChange}
                    onBreakpointChange={onBreakpointChange}
                    onDrop={onDrop}
                    isDroppable
                >
                    {generateDOM()
                    }
                </ResponsiveReactGridLayout>
            </div>
            <DroppableComponents />
        </>
    );
};

export default GridLayout;

GridLayout.defaultProps = {
    className: "layout",
    rowHeight: 100,
    cols: { lg: 4, md: 4, sm: 2, xs: 2 },
    onLayoutChange: (layout: any, layouts: any) => { },
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480 },
    containerPadding: [1, 0]
};
