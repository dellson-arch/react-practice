import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./actions/authActions";

const authSlice = createSlice({
  name : "auth",
  initialState : {
    user : null,
    isAuthenticated : false,
    isLoading : true
  },
  reducers : {
    addUser : (state , actions)=>{
        state.user = actions.payload,
        state.isAuthenticated = true,
        state.isLoading = false
    },
    removeUser : (state) =>{
        state.user = null,
        state.isAuthenticated = false,
        state.isLoading = false
    }
  },
  extraReducers : (builder) =>{
    builder 
    .addCase(loginUser.pending , (state)=>{
        state.isLoading = true
    })
    .addCase(loginUser.fulfilled , (state , action)=>{
        state.user = action.payload
        state.isAuthenticated = true
        state.isLoading = false
    })
    .addCase(loginUser.rejected , (state)=>{
      state.user = null,
      state.isAuthenticated = false,
      state.isLoading = false
    })
  }
})

export const {addUser , removeUser} = authSlice.actions
export default authSlice.reducer