 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 export const productApi = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
    }),
    endpoints: (builder) => ({
        // geting all the products
        getAllProducts: builder.query({
            query: () => "/products",
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/products/add",
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                },
                updateProducts: builder.mutation({
                    query: (data) => ({
                        url: "/products",
                        method: "POST",
                        body: data,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }),
                        
                })
            }),
        }),
    }),
 })


 export const {useGetAllProductsQuery, useGetSingleProductQuery,useAddProductMutation} = productApi;


 