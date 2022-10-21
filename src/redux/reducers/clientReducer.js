import {ActionTypes} from "../constants/action-types";

const initialState = {
    clients: []
}
export const clientReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_CLIENTS:
            return {...state, clients:payload};
        default:
            return state;

    }
};

