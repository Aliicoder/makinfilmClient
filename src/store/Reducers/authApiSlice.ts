import { apiSlice } from "@/api/apiSlice"
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    persistLogin:builder.mutation({
      query:()=>("/refresh")
    }),

    Login:builder.mutation({
      query:credentials=>({
        url:'/user/login',
        method: 'POST',
        body:{...credentials}
      })
    }), 
    logOut:builder.mutation({
      query:()=>{
        return{
          url:'/refresh/cancel',
          method:'get',
        }
      }
    }),
  })
})
export const {
 usePersistLoginMutation,
 useLoginMutation,
 useLogOutMutation,
} = authApiSlice