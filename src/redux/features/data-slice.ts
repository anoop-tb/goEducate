import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxTableDataProps } from "../../commonType";

type TableProps = {
    isLoading: boolean;
    tableContent: ReduxTableDataProps[] | null;
};

const initialStateValue: TableProps = {
    isLoading: false,
    tableContent: null,
};

const tableSlice = createSlice({
  name: "tableData",
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTable.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTable.fulfilled, (state, action) => {
        state.isLoading = false
        state.tableContent = action.payload
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
