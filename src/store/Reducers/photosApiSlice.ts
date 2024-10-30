import { apiSlice } from "@/api/apiSlice"
import { formidable } from "@/utils/helpers/formidable"
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchPhotos:builder.mutation({
      query:(credentials)=>{ 
        return{
          url:`/photo?search=${credentials.searchValue}&&curPage=${credentials.curPage}&&perPage=${credentials.perPage}`,
          method:'get',
        }
      }  
    }),
    addPhoto:builder.mutation({
      query:credentials=>{
        const formData = formidable(credentials);
        return{
          url:`/photo`,
          method:'POST',
          body:formData
        }
      }  
    }),
  })
})
export const {
 useAddPhotoMutation,
 useFetchPhotosMutation
} = productApiSlice