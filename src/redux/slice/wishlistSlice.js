import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:'wishList',
    initialState:[],  //to store more than one values
    reducers:{
     //action
     //function to add item to state
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist :(state,action)=>{
            //filter - return a new array satisfying the condition
           return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const {addToWishlist , removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer