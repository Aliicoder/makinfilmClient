import { apiSlice } from "@/api/apiSlice"
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    refresh:builder.mutation({
      query:()=>({
        url:"/refresh",
        method:"get",
      })
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
          method:'PATCH',
        }
      }
    }),
  })
})
export const {
 useRefreshMutation,
 useLoginMutation,
 useLogOutMutation,
} = authApiSlice