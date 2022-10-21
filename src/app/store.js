import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customerSlice";
import deviceReducer from "../features/deviceSlice";

export default configureStore({
  reducer: {
    customers: customerReducer,
    devices: deviceReducer,
  },
});
