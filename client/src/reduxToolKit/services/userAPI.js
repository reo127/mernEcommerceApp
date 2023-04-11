import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({

    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    endpoints: (builder) => ({

        signUp: builder.mutation({
            query: (bodyData) => {
                console.log(bodyData)
                return {
                    url: "auth/signup",
                    method: "POST",
                    body: bodyData,
                    headers: { "Content-Type": "application/json" }
                }
            }
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
            }
        }),
        logout: builder.mutation({
            query: () => {
                return {
                    url: "auth/logout",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                }
            }
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
            }
        }),
        eaditProduct: builder.mutation({
            query: (body) => {
                return {
                    url: "admin/updateProduct",
                    method: "PUT",
                    credentials: "include",
                    body: body
                }
            }
        }),
        deleteProduct: builder.mutation({
            query: (productId) => {
                return {
                    url: `admin/deleteproduct/${productId}`,
                    method: "DELETE",
                    credentials: "include",
                }
            }
        }),
        getProduct: builder.query({
            query: (productId) => {
                return {
                    url: `product/${productId}`,
                    method: "get",
                }
            }
        }),
        getAllProduct: builder.query({
            query: () => {
                return {
                    url: "products/getallproducts",
                    method: "get",
                }
            }
        }),
        getProductByCatagory: builder.query({
            query: (catagoryName) => {
                console.log(catagoryName);
                return {
                    url: `products/${catagoryName}`,
                    method: "get",
                }
            }
        }),
        searchProducts: builder.query({
            query: (productName) => {
                return {
                    url: `products/search/${productName}`,
                    method: "get",
                }
            }
        }),
        getProfile: builder.query({
            query: () => {
                return {
                    url: "auth/profile",
                    method: "get",
                    headers: { "Content-Type": "application/json" },
                    credentials: 'include',
                }
            }
        }),
        updateProfile: builder.mutation({
            query: (body) => {
                return {
                    url: "auth/updateprofile",
                    method: "PUT",
                    credentials: "include",
                    body: body
                }
            }
        }),
        orderd: builder.mutation({
            query: (body) => {
                return {
                    url: "orders/orderproduct",
                    method: "POST",
                    credentials: "include",
                    body: body
                }
            }
        }),
        getOrders: builder.query({
            query: () => {
                return {
                    url: "orders/allorders",
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: 'include',
                }
            }
        }),
        updateOrder: builder.mutation({
            query: ({ status, orderId }) => {
                return {
                    url: `orders/updateorder/${status}/${orderId}`,
                    method: "PUT",
                    credentials: "include",
                }
            }
        }),
        deleteOrder: builder.mutation({
            query: (orderId) => {
                return {
                    url: `orders/deleteorder/${orderId}`,
                    method: "DELETE",
                    credentials: "include",
                }
            }
        }),
        addToCart: builder.mutation({
            query: (productId) => {
                return {
                    url: `cart/${productId}/`,
                    method: "POST",
                    credentials: "include",
                }
            }
        }),
        deleteCart: builder.mutation({
            query: (productId) => {
                return {
                    url: `cart/removefromcart/${productId}`,
                    method: "DELETE",
                    credentials: "include",
                }
            }
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