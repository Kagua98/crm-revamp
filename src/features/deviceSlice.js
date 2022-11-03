import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDevices = createAsyncThunk("info/devices/", async () => {
  const res = await fetch(
    "https://matrixtelematic.herokuapp.com/info/devices/",
    {
      credentials: "include",
    }
  );

  if (res.ok) {
    const Devices = await res.json();
    return { Devices };
  }
});

export const addDevice = createAsyncThunk("info/addDevice", async (payload) => {
  const resp = await fetch(
    "https://matrixtelematic.herokuapp.com/info/devices/",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        mid_serial_no: payload.serialNo,
        sup_device_no: payload.supNo,
        customer_name: payload.customerName,
        middleware_type: payload.middlewareType,
        make: payload.make,
        distributor: payload.distributor,
      }),
    }
  );

  if (resp.ok) {
    const device = await resp.json();
    return { device };
  }
});

export const updateDevice = createAsyncThunk(
  "info/updateDevice",
  async (payload) => {
    const resp = await fetch(
      `https://matrixtelematic.herokuapp.com/info/devices/${payload.id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          mid_serial_number: payload.midSno,
          sup_device_no: payload.supNo,
          customer_name: payload.clientName,
          middleware_type: payload.middlewareType,
          make: payload.make,
          distributor: payload.distributor,
        }),
      }
    );

    if (resp.ok) {
      const device = await resp.json();
      return { device };
    }
  }
);

export const deleteDevice = createAsyncThunk(
  "devices/deleteDevice",
  async (payload) => {
    const resp = await fetch(
      `https://matrixtelematic.herokuapp.com/info/devices/${payload.id}`,
      {
        method: "DELETE",
      }
    );

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);

export const deviceSlice = createSlice({
  name: "devices",
  initialState: {
    Devices: {},
  },

  extraReducers: {
    [getDevices.fulfilled]: (state, action) => {
      return action.payload.Devices;
    },

    [addDevice.fulfilled]: (state, action) => {
      state.push(action.payload.device);
    },

    [updateDevice.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (devices) => devices.id === action.payload.id
      );
      state[index] = action.payload;
    },

    [deleteDevice.fulfilled]: (state, action) => {
      return state.filter((devices) => devices.id !== action.payload.id);
    },
  },
});

export default deviceSlice.reducer;
