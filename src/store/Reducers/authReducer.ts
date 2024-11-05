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


// import { createSlice } from '@reduxjs/toolkit'
// import api from '@/api/api'
// export const adminLogin = createAsyncThunk(
//   'auth/adminLogin',
//   async(info,{fulfillWithValue,rejectWithValue})=>{
//     console.log(info)
//     try {
//       const { data:response } = await api.post('/adminLogin',info,{
//         withCredentials: true,
//         headers:{
//           "Content-Type": "application/json"
//         }
//       })
//       localStorage.setItem('accessToken',response.admin.accessToken)
//       return fulfillWithValue(response)
//     } catch (error:any) {
//       return rejectWithValue(error.response.data)
//     }
//   }
// )
// export const sellerSignup = createAsyncThunk(
//   'auth/sellerSignup',
//   async(info,{fulfillWithValue,rejectWithValue})=>{
//     console.log(info)
//     try {
//       const { data:response } = await api.post('/sellerSignup',info,{
//         withCredentials: true,
//         headers:{
//           "Content-Type": "application/json"
//         }
//       })
//       localStorage.setItem('accessToken',response.admin.accessToken)
//       return fulfillWithValue(response)
//     } catch (error:any) {
//       return rejectWithValue(error.response.data)
//     }
//   }
// )
// export interface AuthStates {
//   successMessage: string
//   errorMessage: string
//   loading:boolean
//   user:string
// }
// export const authReducer = createSlice({
//   name: 'auth',
//   initialState:{
//     successMessage:'',
//     errorMessage:'',
//     loading:false,
//     user:{
  
//     },
//     token:null
//   },
//   reducers:{
//     setCredentials:(state,action) => {
//       const { user,token } = action.payload
//       state.user = user
//       state.token = token
//     },
//     setErrorMessage : (state,_) => {
//       state.errorMessage = ""
//     },
//     setSuccessMessage : (state,_) => {
//       state.successMessage = ""
//     }
//   },
//   extraReducers:(builder)=> {
//     builder
//     .addCase(adminLogin.pending,(state,_)=>{
//       state.loading = true
//     })
//     .addCase(adminLogin.rejected,(state,rejectedWithValue)=>{
//       state.loading = false
//       state.errorMessage = rejectedWithValue.payload?.message
//     })
//     .addCase(adminLogin.fulfilled,(state,fulfilledWithValue)=>{
//       state.loading = false
//       state.successMessage = fulfilledWithValue.payload?.message
//     })
    
//     .addCase(sellerSignup.pending,(state,_)=>{
//       state.loading = true
//     })
//     .addCase(sellerSignup.rejected,(state,rejectedWithValue)=>{
//       state.loading = false
//       state.errorMessage = rejectedWithValue.payload?.message
//     })
//     .addCase(sellerSignup.fulfilled,(state,fulfilledWithValue)=>{
//       state.loading = false
//       state.successMessage = fulfilledWithValue.payload?.message
//     })
//   }
// })
// export const { setErrorMessage ,setSuccessMessage } = authReducer.actions
// export default authReducer.reducer 



