import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../rootReducer';
import { addNewProductFields } from '../../@types';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.example.com',
    prepareHeaders: (headers, { getState }) => {
        // retrieve token from redux store
        const token = (getState() as RootState).auth.access_token;
        // console.log("Token from redux store", token);
        // if it exists, add it to the request headers
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
      },
}),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
    addNewProduct: builder.mutation<{id: string}, addNewProductFields>({
      query: (body) => ({
        url: '/products/new_product',
        method: 'POST',
        body
      }),
    }),
    uploadImage: builder.mutation<void, FormData>({
      query: (formData) => ({
        url: '/images/upload-single',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useAddNewProductMutation, useUploadImageMutation } = productsApi;
export default productsApi.reducer;