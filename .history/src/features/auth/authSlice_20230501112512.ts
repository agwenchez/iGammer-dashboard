import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState, User } from "../../@types";
import { RootState } from "../../app/rootReducer";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  } as AuthState,

  reducers: {
    setCredentials: (
      state,
      {
        payload: { data },
      }: PayloadAction<{ data: User }>
    ) => {
      state.user = data
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.access_token;
