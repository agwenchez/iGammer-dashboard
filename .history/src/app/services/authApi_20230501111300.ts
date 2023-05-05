import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { LoginRequest, LoginResponse, AuthUser, SignupResponse, SignupRequest } from "../../@types";
import { RootState } from '../rootReducer';
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from '../../@types';
const BASE_URL = process.env.VITE_BASE_URL

export const authApi = createApi({
  reducerPath:'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.access_token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // signup: builder.mutation<SignupResponse, SignupRequest>({
    //   query: (body) => ({
    //     url: 'auth/signup',
    //     method: 'POST', 
    //     body
    //   }),
    // }),
  }),
})

export const { useLoginMutation } = authApi