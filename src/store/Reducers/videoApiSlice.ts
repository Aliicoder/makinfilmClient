import { apiSlice } from "@/api/apiSlice"
import { formidable } from "@/utils/helpers/formidable"
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchVideos:builder.mutation({
      query:(credentials)=>{
        return{
          url:`/video?search=${credentials.searchValue}&&curPage=${credentials.curPage}&&perPage=${credentials.perPage}`,
          method:'get',
        }
      },
      
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
  })
})
export const {
  useAddVideoMutation,
  useFetchVideosMutation,
  useUpdateVideoMutation
} = productApiSlice