import { apiSlice } from "@/api/apiSlice"
import { formidable } from "@/utils/helpers/formidable"
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchPhotos:builder.query({
      query:({searchValue,curPage,perPage})=>
        `/photo?search=${searchValue}&&curPage=${curPage}&&perPage=${perPage}`,
      providesTags:["Photos"]
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
        const formData = formidable(credentials);console.log(formData)
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
 useFetchPhotosQuery,
 useDeletePhotoMutation,
 useUpdatePhotoMutation,
 util
} = productApiSlice