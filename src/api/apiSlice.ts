import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "@/store/Reducers/authReducer";
import { RootState } from "@/store";

interface AuthResponse {
  user:{
    name: string
    avatar: string
    roles: number[]
    accessToken:string
  }
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const { accessToken } = state.auth.user; //console.log("(apiSlice) access token to be sent >>",accessToken);
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`); //console.log('Authorization header set:', headers.get('authorization'));
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result:any = await baseQuery(args, api, extraOptions); //console.log("initial result >>", result);
  if (result?.error?.originalStatus === 403 || result?.error?.status == 403) { console.log(" ***refreshing user")
    const refreshResult = await baseQuery('/refresh', api,extraOptions);
    if(refreshResult.data) {
      const { user } = refreshResult.data as AuthResponse;
      if (user) { console.log('refresh data credentials >> ' , user)
        api.dispatch(setCredentials(user));
      } else {
        api.dispatch(setCredentials({ user: "", token: "" }));
      }
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result; // Ensure to return the result
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});



