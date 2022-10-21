import {ActionTypes} from "../constants/action-types";

export const setClients = (clients) => {
    return {
        type: ActionTypes.SET_CLIENTS,
        payload: clients,
    };
};

export const selectedClient = (client) => {
    return {
        type: ActionTypes.SELECTED_CLIENT,
        payload: client,
    };
};