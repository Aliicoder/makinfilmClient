import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "@/store/Reducers/authReducer";
import { RootState } from "@/store";
import toast from "react-hot-toast";

interface AuthResponse {
  user:{
    name: string
    avatar: string
    roles: number[]
    accessToken:string
  }
}
// 'http://localhost:3000/api/v1'
// https://makinfilmserver.site/api/v1
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://makinfilmserver.site/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const { accessToken } = state.auth.user; 
    if (accessToken) 
      headers.set('authorization', `Bearer ${accessToken}`)
    return headers;
  },
});

//! all 403 and 400 errors will be handled here
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let response:any = await baseQuery(args, api, extraOptions); 
  
  if (response?.error?.originalStatus === 500 || response?.error?.status == 500) {
    if(import.meta.env.ENV == "development"){
      console.log("500 status error",response)
      toast.error("something went wrong")
    }
    return response
  }

  if (response?.error?.originalStatus === 400 || response?.error?.status == 400){
    if(import.meta.env.ENV === "development"){
      console.log("mode is >>",import.meta.env.ENV)
      toast.error(response?.error?.data?.message)
      console.error("400 status error >>",response?.error)
    }
    return response
  }
  if (response?.error?.originalStatus === 403 || response?.error?.status == 403){ 
    console.log("initial auth error >>", response?.error)

    const refreshResult = await baseQuery('/refresh', api,extraOptions);
    if(refreshResult.data) {
      const { user } = refreshResult.data as AuthResponse;
      api.dispatch(setCredentials(user));
      response = await baseQuery(args, api, extraOptions);
    } else {
      toast.error("Session expired. Please log in again.");
    }
  }
  return response; 
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes:["Photos","Videos"],
  endpoints: () => ({}),
});



