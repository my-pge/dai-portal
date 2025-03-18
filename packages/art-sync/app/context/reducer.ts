import { Action, State } from '../types';

export const SET_SELECTED = 'setSelected';
export const SET_FILTER_MULTI_VALUES = 'setFilterMultiValue';
export const SET_FILTER_SINGLE_VALUES = 'setFilterSingleValue'
export const SET_DATA = "setData";
export const ADD_DATA = "addData";
export const SET_ERROR = "setError";
export const SET_LEFTVISIBLE = "setLeftVisible";
export const SET_RIGHTVISIBLE = "setRightVisible";
export const SET_KPI = "setKpi";

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case SET_DATA || ADD_DATA:
            const { data, totalCount, nextPageToken } = action.payload;
            console.log(data, totalCount, nextPageToken)
            return {
                ...state, data: data,
                totalCount,
                nextPageToken
            }
        case ADD_DATA:
            const newState = {
                ...state, data: state.data.concat(action.payload.data),
                totalCount: action.payload.totalCount,
                nextPageToken: action.payload.nextPageToken
            }
            return newState;

        case SET_LEFTVISIBLE:
            return {
                ...state, leftVisible: action.payload
            }

    }
};

export default reducer;