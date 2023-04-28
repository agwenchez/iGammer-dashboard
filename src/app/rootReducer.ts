import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { authApi, productsApi } from "./services";
import productsReducer from './services/productsApi'

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath] : productsApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
