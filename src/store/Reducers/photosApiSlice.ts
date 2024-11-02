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
    updatePhoto:builder.mutation({
      query:credentials=>{
        const formData = formidable(credentials.values);console.log(formData)
        return{
          url:`/photo/${credentials.photoId}`,
          method:'PATCH',
          body:formData
        }
      }  
    }),
    deletePhoto:builder.mutation({
      query:credentials=>{
        return{
          url:`/photo/${credentials.photoId}`,
          method:'DELETE',
        }
      }  
    }),
  })
})
export const {
 useAddPhotoMutation,
 useFetchPhotosMutation,
 useDeletePhotoMutation,
 useUpdatePhotoMutation
} = productApiSlice