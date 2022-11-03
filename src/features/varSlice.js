import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getVARs = createAsyncThunk("vars/info/vars", async () => {
    const res = await fetch(
        "https://matrixtelematic.herokuapp.com/vars/info/vars/",
        {
            credentials: "include",
        }
    );

    if (res.ok) {
        const vars = await res.json();
        return { vars };
    }
});

export const addVAR = createAsyncThunk(
    "vars/info/addVar",
    async (payload) => {
        const resp = await fetch(
            "https://matrixtelematic.herokuapp.com/vars/info/vars/",
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name: payload.varName,
                    pin: payload.varPin,
                    contact: payload.varContact,
                    location: payload.varlocation,
                    // customer_email: payload.clientEmail,
                }),
            }
        );

        if (resp.ok) {
            const vars = await resp.json();
            return { vars };
        }
    }
);

export const deleteVAR = createAsyncThunk(
    "vars/info/deleteVAR",
    async (payload) => {
        const resp = await fetch(
            `https://matrixtelematic.herokuapp.com/vars/info/vars/${payload.id}`,
            {
                method: "DELETE",
            }
        );

        if (resp.ok) {
            return { id: payload.id };
        }
    }
);

export const updateVAR = createAsyncThunk(
    "vars/info/updateVAR",
    async (payload) => {
        const resp = await fetch(
            `https://matrixtelematic.herokuapp.com/vars/info/vars/${payload.id}`,
            {
                method: "PUT",
                credentials: "include",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name: payload.varName,
                    pin: payload.varPin,
                    contact: payload.varContact,
                    location: payload.varlocation,
                    // customer_email: payload.clientEmail,
                }),
            }
        );

        if (resp.ok) {
            const vars = await resp.json();
            return { vars };
        }
    }
);

export const varSlice = createSlice({
    name: "vars",
    initialState: {
        vars: {},
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
    },
    extraReducers: {
        [getVARs.fulfilled]: (state, action) => {
            return action.payload.vars;
        },

        [addVAR.fulfilled]: (state, action) => {
            state.push(action.payload.vars);
        },

        [updateVAR.fulfilled]: (state, action) => {
            const index = state.findIndex(
                (vars) => vars.id === action.payload.id
            );
            state[index] = action.payload;
        },

        [deleteVAR.fulfilled]: (state, action) => {
            return state.filter((vars) => vars.id !== action.payload.id);
        },
    },
});

export default varSlice.reducer;
