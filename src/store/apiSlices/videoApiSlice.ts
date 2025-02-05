import { apiSlice } from "@/store/api/apiSlice"
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchVideos:builder.query({
      query:({searchValue,curPage,perPage})=>
        `/video?search=${searchValue}&&curPage=${curPage}&&perPage=${perPage}`,
        providesTags:["Videos"]      
    }),
    addVideo:builder.mutation({
      query:({credentials})=>{
        return{
          url:`/video`,
          method:'POST',
          body:credentials
        }
      }  
    }),
    updateVideo:builder.mutation({
      query:({credentials,videoId})=>{
        return{
          url:`/video/${videoId}`,
          method:'PATCH',
          body:credentials
        }
      }  
    }),
    deleteVideo:builder.mutation({
      query:({videoId})=>{
        return{
          url:`/video/${videoId}`,
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