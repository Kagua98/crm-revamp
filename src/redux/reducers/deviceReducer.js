import {DeviceActionTypes} from "../constants/action-types";

const initialState = {
    devices: []
}
export const deviceReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case DeviceActionTypes.SET_DEVICES:
            return {...state, devices:payload};
        default:
            return state;

    }
};

