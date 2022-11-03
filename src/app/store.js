import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customerSlice";
import deviceReducer from "../features/deviceSlice";
import varReducer from "../features/varSlice";
import varDeviceReducer from "../features/varDeviceSlice";

export default configureStore({
  reducer: {
    customers: customerReducer,
    devices: deviceReducer,
    vars: varReducer,
    varDevices: varDeviceReducer,
  },
});
