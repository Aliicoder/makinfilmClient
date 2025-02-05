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
          url:'/user/logout',
          method:'POST',
        }
      }
    }),
    resetPassword:builder.mutation({
      query:credentials=>({
        url:'/user/resetPassword',
        method: 'PATCH',
        body:{...credentials}
      })
    }), 
    changePassword:builder.mutation({
      query:credentials=>({
        url:'/user/changePassword',
        method: 'PATCH',
        body:{...credentials}
      })
    }), 
    
  })
})
export const {
 usePersistLoginMutation,
 useChangePasswordMutation,
 useResetPasswordMutation,
 useLoginMutation,
 useLogoutMutation,
} = authApiSlice