import { Action, State } from "../types";
import React, { createContext, useContext } from "react";
import initialState from "./initialState";

const GlobalContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export default GlobalContext;