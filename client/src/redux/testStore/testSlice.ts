import { createSlice } from "@reduxjs/toolkit";
interface ITest {
  email: string;
}

const initialState: ITest = {
  email: "asdas",
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    doTest: (state: { email: string }, action: { payload: any }) => {
      state.email = action.payload;
    },
  },
});

export const { doTest } = testSlice.actions;

export const getEmail = (state: any) => state.test.email;
export default testSlice.reducer;
