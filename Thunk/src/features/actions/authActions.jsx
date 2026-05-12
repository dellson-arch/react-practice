import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let loginUser = createAsyncThunk(
   "auth/login",
   async(credentials , thunkAPI) =>{
     try {
        let res = await axios.post(
            "https://dummyjson.com/auth/login",
            credentials
        )
        localStorage.setItem("accessToken" , res.data.accessToken)
        return res.data

     } catch (error) {
        return thunkAPI.rejectWithValue("login failed")
     }
   }
)

export let currentUser = createAsyncThunk(
   "auth/me",
   async(_ , thunkAPI)=>{ //abe idhar credentials nahi likh sakte kyuki dekh neeche kidhar bhi tune crediantials use nahi kiye hai
      try {
         let token = localStorage.getItem("accessToken")
         if(!token){
            return thunkAPI.rejectWithValue("token not provided")
         }
         let res = await axios.get("https://dummyjson.com/auth/me" , {
            headers : {
               Authorization : `Bearer ${token}`
            }
         })
         return res.data
      } catch (error) {
         return thunkAPI.rejectWithValue("Can't get the currentUser")
      }
   }
)