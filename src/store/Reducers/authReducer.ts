import { RootState } from '@/store/index'
import { createSlice } from '@reduxjs/toolkit'

export const authReducer = createSlice({
  name: 'auth',
  initialState:{
    user:{
      name:"",
      accessToken:"",
    },
  },
  reducers:{
    setCredentials:(state,action) => {
      const  user   = action.payload ; //console.log("auth reducer >>",action.payload)
      state.user = user
    },
    logOut:(state) =>{
      state.user = {
        name:"",
        accessToken:"",
      }
    }
  },
})
export const {setCredentials,logOut} = authReducer.actions
export default authReducer.reducer 
export const selectCurrentUser = (state:RootState) => state.auth.user

