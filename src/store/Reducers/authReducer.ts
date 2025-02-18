import { RootState } from '@/store/index'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    name:"",
    accessToken:""
  }
}
export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    setCredentials:(state,action) => {
      const  user   = action.payload 
      state.user = user
    },
    logout:() =>{
      return initialState
    }
  },
})
export const {setCredentials,logout} = authReducer.actions
export default authReducer.reducer 
export const selectCurrentUser = (state:RootState) => state.auth.user

