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
        payload: { user },
      }: PayloadAction<{ user: User; }>
    ) => {
      state.user = user;
      state.access_token = access_token;
    },
    logout: (state) => {
      state.access_token = null;
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.access_token;
