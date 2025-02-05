import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "@/store/Reducers/authReducer";
import { RootState } from "@/store";
import toast from "react-hot-toast";
import { HttpStatus } from "@/constants/enum/enum";
import { AuthResponse } from "@/types/types";

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const { accessToken } = state.auth.user; 
    if (accessToken) 
      headers.set('authorization', `Bearer ${accessToken}`)
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let response:any = await baseQuery(args, api, extraOptions);
    console.log("response object :",response)
  switch (response?.error?.originalStatus || response?.error?.status) {

    case HttpStatus.INTERNAL_SERVER_ERROR:
      if (import.meta.env.ENV === "development") 
        console.error("500 status error", response)
      toast.error("Something went wrong. Please try again later.");
      break

    case HttpStatus.FORBIDDEN:
      if (import.meta.env.ENV === "development") 
        console.log("403 status error >>", response?.error);

      const refreshResult = await baseQuery('/refresh', api, extraOptions);
      if (refreshResult.data) {
        const { user } = refreshResult.data as AuthResponse;
        if (user) {
          api.dispatch(setCredentials(user));
        } else {
          api.dispatch(setCredentials({ user: "", token: "" }));
        }
        response = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
      break

    case HttpStatus.UNAUTHORIZED:
      toast.error("Unauthorized access. Please log in.")
      api.dispatch(logout());
      break;
  }
  return response; 
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes:["Photos","Videos"],
  endpoints: () => ({}),
});


// 'http://localhost:3000/api/v1'
// https://makinfilmserver.site/api/v1

