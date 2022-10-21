import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCustomers = createAsyncThunk("info/customers", async () => {
  const res = await fetch(
    "https://matrixtelematic.herokuapp.com/info/customers/",
    {
      credentials: "include",
    }
  );

  if (res.ok) {
    const customers = await res.json();
    return { customers };
  }
});

export const addCustomer = createAsyncThunk(
  "info/addCustomer",
  async (payload) => {
    const resp = await fetch(
      "https://matrixtelematic.herokuapp.com/info/customers/",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          customer_name: payload.clientName,
          customer_pin: payload.clientPin,
          customer_contact: payload.clientContact,
          customer_location: payload.middlewareType,
          // customer_email: payload.clientEmail,
        }),
      }
    );

    if (resp.ok) {
      const customer = await resp.json();
      return { customer };
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  "info/deleteCustomer",
  async (payload) => {
    const resp = await fetch(
      `https://matrixtelematic.herokuapp.com/info/customers/${payload.id}`,
      {
        method: "DELETE",
      }
    );

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);

export const updateCustomer = createAsyncThunk(
  "info/updateCustomer",
  async (payload) => {
    const resp = await fetch(
      `https://matrixtelematic.herokuapp.com/info/customers/${payload.id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          customer_name: payload.clientName,
          customer_pin: payload.clientPin,
          customer_contact: payload.clientContact,
          customer_location: payload.middlewareType,
          // customer_email: payload.clientEmail,
        }),
      }
    );

    if (resp.ok) {
      const customer = await resp.json();
      return { customer };
    }
  }
);

export const customerSlice = createSlice({
  name: "customers",
  initialState: {
    customers: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: {
    [getCustomers.fulfilled]: (state, action) => {
      return action.payload.customers;
    },

    [addCustomer.fulfilled]: (state, action) => {
      state.push(action.payload.customer);
    },

    [updateCustomer.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (customer) => customer.id === action.payload.id
      );
      state[index] = action.payload;
    },

    [deleteCustomer.fulfilled]: (state, action) => {
      return state.filter((customers) => customers.id !== action.payload.id);
    },
  },
});

export default customerSlice.reducer;
