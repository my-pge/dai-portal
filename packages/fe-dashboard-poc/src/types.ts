import { DragSourceMonitor } from "react-dnd/dist/types";

export interface Component {
    name: string;
    type: string;
    subType: string;
}
export interface RowProps {
    data: {
        id: string;
        type: string;
        children?: LayoutItem[];
    };
    components: any;
    handleDrop: (item: any, monitor: DragSourceMonitor) => void;
    path: string;
}


export interface LayoutItem {
    id: string;
    type: string;
    children?: LayoutItem[];
}

export interface ComponentItem {
    id: string;
    type: string;
    component: any;
}

export interface DropZoneData {
    path: string;
    childrenCount: number;
}


export interface DropZoneProps {
    data: DropZoneData;
    onDrop: (dropZone: DropZoneData, item: any) => void;
    path?: string;
    isLast?: boolean;
}

export interface SideBarItemProps {
    data: {
        id: string;
        type: string;
        component: {
            type: string;
            content: string;
        };
    }
}
