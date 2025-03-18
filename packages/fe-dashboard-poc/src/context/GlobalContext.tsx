import React, { createContext } from "react";

export enum ActionKind {
    GET_DATA = "getData",
    SAVE_DATA = "saveData"
}

export type State = {
    data?: [];
}


export type Action =
    | { type: "getData"; payload: [] }
    | { type: "saveData"; payload: [] }

export const initialState: State = {
    data: []
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionKind.GET_DATA:
            return { ...state, data: action.payload };
        case ActionKind.SAVE_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

const GlobalContext = createContext<{
    state: State;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
});

export function useGlobalContext() {
    return React.useContext(GlobalContext);
}

export default GlobalContext;