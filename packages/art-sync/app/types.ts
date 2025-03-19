export enum ActionKind {
    SET_SELECTED = "setSelected",
    SET_FILTER_CHECKED = 'setFilterCheckboxValue',
    SET_DATA = "setData"
}


export type ObjectMap = {
    [key: string]: any;
}

export type ObjectString = {
    [key: string]: string;
}

export type ObjectArray = {
    [key: string]: string[];
}

export type State = {
    KPI: { incomplete: number; complete: number; totalPlanned: number; quarterAlignment: number; };
    data: any;
    totalCount: number;
    nextPageToken: string;
    error: string;
    selected: ObjectMap;
    filterMultipleValue: ObjectArray;
    filterSingleValue: ObjectString;
    leftVisible: boolean;
    rightVisible: boolean
};

export type dataType = {
    properties: { [id: string]: any };
    rid: string;
}
export type KPI = { incomplete: any, complete: any, totalPlanned: any, quarterAlignment: any }

export type Action =
    | { type: "setData"; payload: { data: [], totalCount: number, nextPageToken: string; } }
    | { type: "addData"; payload: { data: [], totalCount: number, nextPageToken: string; } }
    | { type: "setLeftVisible"; payload: boolean }

