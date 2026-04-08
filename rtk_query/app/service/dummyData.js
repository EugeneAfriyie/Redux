 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 const productApi = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
        endpoint: (builder) => ({

            // geting all the products
            getAllProducts: builder.query({
                query: () => "/products",
            }),
        })

    }),  

 })


 export const {useGetAllProductsQuery} = productApi;