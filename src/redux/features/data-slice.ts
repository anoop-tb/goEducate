import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxTableDataProps } from "../../commonType";

type TableProps = {
  value: {
    isTable: boolean;
    table: ReduxTableDataProps[] | null;
  };
};

const initialStateValue: TableProps = {
  value: {
    isTable: false,
    table: null,
  },
};

const tableSlice = createSlice({
  name: "tableData",
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTable.pending, (state, action) => {
        state.value.isTable = false
      })
      .addCase(getTable.fulfilled, (state, action) => {
        state.value.isTable = true
        state.value.table = action.payload
      });
  },
});

export const getTable = createAsyncThunk(
  "tableSlice/getTable",
  async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      return null;
    }
  }
);


export default tableSlice.reducer;
