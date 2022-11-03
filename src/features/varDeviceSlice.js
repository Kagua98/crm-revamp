import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getVARDevices = createAsyncThunk("var/info/var_devices/", async () => {
    const res = await fetch(
        "https://matrixtelematic.herokuapp.com/vars/info/var_devices/",
        {
            credentials: "include",
        }
    );

    if (res.ok) {
        const Devices = await res.json();
        return { Devices };
    }
});

export const addDevice = createAsyncThunk("var/info/addDevice", async (payload) => {
    const resp = await fetch(
        "https://matrixtelematic.herokuapp.com/vars/info/var_devices/",
        {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                mid_serial_no: payload.serialNo,
                sup_device_no: payload.supNo,
                var_name: payload.varName,
                device_serial_number: payload.deviceSerialNumber,
                date: payload.date,
                middleware_type: payload.middlewareType,
                make: payload.make,
                amount_paid: payload.amountPaid,
            }),
        }
    );

    if (resp.ok) {
        const device = await resp.json();
        return { device };
    }
});

export const updateDevice = createAsyncThunk(
    "var/info/updateDevice",
    async (payload) => {
        const resp = await fetch(
            `https://matrixtelematic.herokuapp.com/vars/info/var_devices/${payload.id}`,
            {
                method: "PUT",
                credentials: "include",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    mid_serial_no: payload.serialNo,
                    sup_device_no: payload.supNo,
                    var_name: payload.varName,
                    device_serial_number: payload.deviceSerialNumber,
                    date: payload.date,
                    middleware_type: payload.middlewareType,
                    make: payload.make,
                    amount_paid: payload.amountPaid,
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
            `https://matrixtelematic.herokuapp.com/vars/info/var_devices/${payload.id}`,
            {
                method: "DELETE",
            }
        );

        if (resp.ok) {
            return { id: payload.id };
        }
    }
);

export const varDeviceSlice = createSlice({
    name: "varDevices",
    initialState: {
        Devices: {},
    },

    extraReducers: {
        [getVARDevices.fulfilled]: (state, action) => {
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

export default varDeviceSlice.reducer;

