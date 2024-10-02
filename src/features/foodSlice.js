import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    food:[]
};
// create reducer
const foodReducer = createSlice ({
    name:'food',
    initialState,
    reducers:{
        // action creater
        addFood:(state,action)=>{
            state.food=action.payload;
        }
    }
})
export const {addFood} =foodReducer.actions
export const getAllFoodList =(state)=>state.food.food
export default foodReducer.reducer