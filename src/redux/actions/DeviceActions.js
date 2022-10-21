import {DeviceActionTypes} from "../constants/action-types";

export const setDevices = (devices) => {
    return {
        type: DeviceActionTypes.SET_DEVICES,
        payload: devices,
    };
};

export const selectedDevice = (device) => {
    return {
        type: DeviceActionTypes.SELECTED_DEVICE,
        payload: device,
    };
};