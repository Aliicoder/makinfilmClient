import { apiSlice } from "@/store/api/apiSlice"
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
    logout:builder.mutation({
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
 useLogoutMutation,
} = authApiSlice