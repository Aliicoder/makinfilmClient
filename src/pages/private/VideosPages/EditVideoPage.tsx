import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ChangeEvent, memo } from "react"
import toast from "react-hot-toast"
import ConditionalLoader from "@/components/conditionals/ConditionalLoader"
import { useLocation,useParams } from "react-router-dom"
import updateVideoValidation from "@/validations/updateVideoValidation"
import { useTranslation } from "react-i18next"
import LinkButton from "@/components/buttons/LinkButton"
import { IoIosArrowRoundBack } from "react-icons/io"
import IconButton from "@/components/buttons/IconButton"
import { useUpdateVideoMutation } from "@/store/apiSlices/videoApiSlice"
import Frame from "@/components/styled/Frame"
import SquircleBorder from "@/components/borders/SquircleBorder"
import Relative from "@/components/styled/Relative"
import Absolute from "@/components/styled/Absolute"
import Text from "@/components/styled/Text"
import formData from "@/utils/functions/formData"
const EditVideoPage = memo(function AddVideoPage() {
  const { videoId } = useParams()
  const [t] = useTranslation()
  const { state } = useLocation(); console.log(state)
  const [updateVideoMutation,{isLoading}] = useUpdateVideoMutation()
  const form = useForm<z.infer<typeof updateVideoValidation>>({ 
    resolver:zodResolver(updateVideoValidation),
    defaultValues: {
      videoId,
      arTitle:state.title.ar,
      enTitle:state.title.en,
      arDescription:state.description.ar,
      enDescription:state.description.en
    },
  })
  const handleFileChange = (e:ChangeEvent<HTMLInputElement>,fieldChange :(value:File)=> void) =>{
    if(e.target.files && e.target.files.length > 0){
      fieldChange(e.target.files[0])
    }
  }
  async function onSubmit(values: z.infer<typeof updateVideoValidation>) {
    try {
      const credentials = formData(values) 
      const response = await updateVideoMutation({credentials,videoId:values.videoId}).unwrap()
      toast.success(response.message)
      form.reset({})
    } catch (error:any) { console.log(error)
      toast.error(error?.data?.message ?? "try again later")
    }
  }
  return (
    <Frame className="p-6">
      <ConditionalLoader condition={isLoading} />
      <LinkButton 
        className={`gap-2 p-3 font-semibold  rtl:flex-row-reverse`} 
        to={".."} 
        text={t("navigators.photos")} 
        direction={"left"}>
       <IoIosArrowRoundBack />
      </LinkButton>
      <SquircleBorder className="rounded border-transparent bg-[#d4d4d420]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-3"
            encType="multipart/form-data">
          <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                  <Relative>
                    <Input 
                      className="relative z-[100] opacity-0 cursor-pointer outline w-full h-full border-0
                        file:bg-slate-800 file:rounded-md "
                      onChange={(e)=>handleFileChange(e, field.onChange)}
                      type="file" 
                      accept="image/*"
                      placeholder="upload the video" />

                      <Absolute className="p-3 z-50 top-0 w-full h-full flex justify-between items-center 
                        rtl:flex-row-reverse ">
                        <Text>
                          { form.getValues("image") ? t("fileSelected") : t("noFileSelected")}
                        </Text>
                        <IconButton 
                          className="fs-16" 
                          type="button"  
                          direction={"left"} 
                          text={t("changePhoto")} >
                        </IconButton>
                      </Absolute>
                    </Relative>
                  </FormControl>
                  <FormDescription>
                    {t("addVideoForm.image")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormField
              control={form.control}
              name="video"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                  <Relative>
                    <Input 
                      className="relative z-[100] w-full h-full opacity-0 cursor-pointer outline border-0
                        file:bg-slate-800 file:rounded-md"
                      onChange={(e)=>handleFileChange(e, field.onChange)}
                      type="file" 
                      accept="video/*"/>
                      <Absolute className="p-3 z-50 top-0 w-full h-full  flex justify-between items-center 
                        rtl:flex-row-reverse ">
                        <Text>
                          { form.getValues("video") ? t("fileSelected") : t("noFileSelected") }
                        </Text>
                        <IconButton 
                          className="fs-10" 
                          type="button"  
                          direction={"left"} 
                          text={t("changeVideo")} >
                        </IconButton>
                      </Absolute>
                    </Relative>
                  </FormControl>
                  <FormDescription>
                  {t("addVideoForm.video")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="arTitle"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="border-slate-700"  {...field} />
                  </FormControl>
                  <FormDescription>
                  {t("addVideoForm.arTitle")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="enTitle"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="border-slate-700"  {...field} />
                  </FormControl>
                  <FormDescription>
                    {t("addVideoForm.enTitle")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
             <FormField
              control={form.control}
              name="arDescription"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="border-slate-700"  {...field} />
                  </FormControl>
                  <FormDescription>
                    {t("addVideoForm.arDescription")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="enDescription"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="border-slate-700" {...field} />
                  </FormControl>
                  <FormDescription>
                  {t("addVideoForm.arDescription")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading ? true : false} type="submit">{t("addVideoForm.submit")}</Button>
          </form>
        </Form>
      </SquircleBorder>
    </Frame>
  )
})
export default EditVideoPage
