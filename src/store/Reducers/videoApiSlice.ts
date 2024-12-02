import { apiSlice } from "@/api/apiSlice"
import { formidable } from "@/utils/helpers/formidable"
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchVideos:builder.query({
      query:({searchValue,curPage,perPage})=>
        `/video?search=${searchValue}&&curPage=${curPage}&&perPage=${perPage}`,
        providesTags:["Videos"]      
    }),
    addVideo:builder.mutation({
      query:credentials=>{
        const formData = formidable(credentials);console.log(formData)
        return{
          url:`/video`,
          method:'POST',
          body:formData
        }
      }  
    }),
    updateVideo:builder.mutation({
      query:credentials=>{
        const formData = formidable(credentials.values);console.log(formData)
        return{
          url:`/video/${credentials.videoId}`,
          method:'PATCH',
          body:formData
        }
      }  
    }),
    deleteVideo:builder.mutation({
      query:credentials=>{
        return{
          url:`/video/${credentials.videoId}`,
          method:'DELETE',
        }
      }  
    }),
  })
})
export const {
  useAddVideoMutation,
  useFetchVideosQuery,
  useUpdateVideoMutation,
  useDeleteVideoMutation,
  util
} = productApiSlice