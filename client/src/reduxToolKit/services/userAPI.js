import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({

    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    endpoints: (builder) => ({
        tagTypes:['Product', 'User', 'Order'],
        signUp: builder.mutation({
            query: (bodyData) => {
                console.log(bodyData)
                return {
                    url: "auth/signup",
                    method: "POST",
                    body: bodyData,
                    headers: { "Content-Type": "application/json" }
                }
            },
            invalidatesTags: ['User']
        }),
        signIn: builder.mutation({
            query: (bodyData) => {
                console.log(bodyData)
                return {
                    url: "auth/signin",
                    method: "POST",
                    body: bodyData,
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                }
            },
            invalidatesTags: ['User']
        }),
        logout: builder.mutation({
            query: () => {
                return {
                    url: "auth/logout",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                }
            },
            invalidatesTags: ['User']
        }),
        addProduct: builder.mutation({
            query: (formData) => {
                return {
                    url: "admin/addproduct",
                    method: "POST",
                    body: formData,
                    credentials: "include",
                    redirect: 'follow'
                }
            },
            invalidatesTags: ['Product']
        }),
        eaditProduct: builder.mutation({
            query: (body) => {
                return {
                    url: "admin/updateProduct",
                    method: "PUT",
                    credentials: "include",
                    body: body
                }
            },
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: (productId) => {
                return {
                    url: `admin/deleteproduct/${productId}`,
                    method: "DELETE",
                    credentials: "include",
                }
            },
            invalidatesTags: ['Product']
        }),
        getProduct: builder.query({
            query: (productId) => {
                return {
                    url: `product/${productId}`,
                    method: "get",
                }
            },
            providesTags: ['Product']
        }),
        getAllProduct: builder.query({
            query: () => {
                return {
                    url: "products/getallproducts",
                    method: "get",
                }
            },
            providesTags: ['Product']
        }),
        getProductByCatagory: builder.query({
            query: (catagoryName) => {
                console.log(catagoryName);
                return {
                    url: `products/${catagoryName}`,
                    method: "get",
                }
            },
            providesTags: ['Product']
        }),
        searchProducts: builder.query({
            query: (productName) => {
                return {
                    url: `products/search/${productName}`,
                    method: "get",
                }
            },
            providesTags: ['Product']
        }),
        getProfile: builder.query({
            query: () => {
                return {
                    url: "auth/profile",
                    method: "get",
                    headers: { "Content-Type": "application/json" },
                    credentials: 'include',
                }
            },
            providesTags: ['User']
        }),
        updateProfile: builder.mutation({
            query: (body) => {
                return {
                    url: "auth/updateprofile",
                    method: "PUT",
                    credentials: "include",
                    body: body
                }
            },
            invalidatesTags: ['User']
        }),
        orderd: builder.mutation({
            query: (body) => {
                return {
                    url: "orders/orderproduct",
                    method: "POST",
                    credentials: "include",
                    body: body
                }
            },
            invalidatesTags: ['Order']
        }),
        getOrders: builder.query({
            query: () => {
                return {
                    url: "orders/allorders",
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: 'include',
                }
            },
            providesTags: ['Order']
        }),
        updateOrder: builder.mutation({
            query: ({ status, orderId }) => {
                return {
                    url: `orders/updateorder/${status}/${orderId}`,
                    method: "PUT",
                    credentials: "include",
                }
            },
             invalidatesTags: ['Order']
        }),
        deleteOrder: builder.mutation({
            query: (orderId) => {
                return {
                    url: `orders/deleteorder/${orderId}`,
                    method: "DELETE",
                    credentials: "include",
                }
            },
             invalidatesTags: ['Order']
        }),
        addToCart: builder.mutation({
            query: (productId) => {
                return {
                    url: `cart/${productId}/`,
                    method: "POST",
                    credentials: "include",
                }
            },
            invalidatesTags: ['User']
        }),
        deleteCart: builder.mutation({
            query: (productId) => {
                return {
                    url: `cart/removefromcart/${productId}`,
                    method: "DELETE",
                    credentials: "include",
                }
            },
            invalidatesTags: ['User']
        }),
    })
})

export const {
    useSignUpMutation,
    useSignInMutation,
    useLogoutMutation,
    useAddProductMutation,
    useGetAllProductQuery,
    useGetProfileQuery,
    useGetProductByCatagoryQuery,
    useGetProductQuery,
    useDeleteProductMutation,
    useEaditProductMutation,
    useUpdateProfileMutation,
    useOrderdMutation,
    useGetOrdersQuery,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
    useAddToCartMutation,
    useDeleteCartMutation,
    useSearchProductsQuery
} = userAPI;