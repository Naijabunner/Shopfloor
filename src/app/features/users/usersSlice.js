import { createSlice } from "@reduxjs/toolkit"

const initialState=[
    {
        id:'0',name:'Duker'
    },
    {
        id:'1',name:'Neil'
    },
    {
        id:'2',name:'Dave'
    },
]
 const usersSlice= createSlice({
    name:'users',
    initialState,
    reducers:{}
 })
 export const selectAllUsers=(state) => state.users;
 export default usersSlice.reducer;