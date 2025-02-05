import { apiSlice } from "@/store/api/apiSlice"
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchPhotos:builder.query({
      query:({searchValue,curPage,perPage})=>
        `/photo?search=${searchValue}&&curPage=${curPage}&&perPage=${perPage}`,
      providesTags:["Photos"]
    }),
    addPhoto:builder.mutation({
      query:({credentials})=>{
        return{
          url:`/photo`,
          method:'POST',
          body:credentials
        }
      }  
    }),
    updatePhoto:builder.mutation({
      query:({credentials,photoId})=>{
        return{
          url:`/photo/${photoId}`,
          method:'PATCH',
          body:credentials
        }
      }  
    }),
    deletePhoto:builder.mutation({
      query:({photoId})=>{
        return{
          url:`/photo/${photoId}`,
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