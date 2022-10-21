import {combineReducers} from "redux";
import {clientReducer} from "./clientReducer";
import {deviceReducer} from "./deviceReducer";

const reducers = combineReducers({
    allClients: clientReducer,
    allDevices: deviceReducer,
});

export default reducers;