import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users : [],
    isAuthenticated : false,
    isLoading : true
  },
  reducers: {
     registerUser : (state , action)=>{
       state.users.push(action.payload)
       state.isAuthenticated = true
       state.isLoading = false
     },
     loginUser : (state,action)=>{
       state.users = action.payload
       state.isAuthenticated = true
       state.isLoading = false
     }
  }
})

export const { registerUser,loginUser } = authSlice.actions
export default authSlice.reducer