import { ActionKind } from "./GlobalContext";

// const hostName = "http://localhost:3030/";
export async function getData({ dispatch, api }) {
    const response = await fetch(`${api}`, {
        method: "GET",
    });
    const result = await response.json();
    return dispatch({
        type: ActionKind.GET_DATA,
        payload: result.res
    });
}

export async function saveData(data, api, dispatch) {
    const response = await fetch(`${api}`, {
        method: "POST",
        body: JSON.stringify({
            data
        })
    });
    const result = await response.json();
    return dispatch({
        type: ActionKind.SAVE_DATA,
        payload: result.res
    });
}