import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetAllProductQuery } from "../services/userAPI";


// export const product = createAsyncThunk("products", async () =>{
//     try {
//        const {data} = useGetAllProductQuery()
//        const result = data
//        return result
//     } catch (err) {
//         return err
//     }
// })


export const product = createAsyncThunk("products", async (rejectWithValue) =>{
    try {
       const responce = await fetch("http://localhost:8000/api/products/getallproducts", {
        method: "GET",
       })
       const result = await responce.json()
       return result
    } catch (err) {
        return rejectWithValue(err)
    }
})



const productSlice = createSlice({
    name: "products",
    initialState: {
        productData: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [product.pending] : (state) => {
            state.loading = true;
        },
        [product.fulfilled] : (state, action) => {
            console.log("ful fulled rohan ")
            state.productData = action.payload
        },
        [product.rejected] : (state, action) => {
            state.error = false
            state.productData = action.payload
        }
    }
})

export default productSlice.reducer