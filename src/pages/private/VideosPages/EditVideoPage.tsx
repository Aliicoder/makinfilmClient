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
import {Squircle} from "corner-smoothing"
import toast from "react-hot-toast"
import ConditionalLoader from "@/components/conditionals/ConditionalLoader"
import { useLocation } from "react-router-dom"
import updateVideoValidation from "@/utils/validations/updateVideoValidation"
import { useUpdateVideoMutation } from "@/store/Reducers/videoApiSlice"
import { useTranslation } from "react-i18next"
import useRedirect from "@/hooks/useRedirect"
import LinkButton from "@/components/buttons/LinkButton"
import { IoIosArrowRoundBack } from "react-icons/io"
import IconButton from "@/components/buttons/IconButton"
const EditVideoPage = memo(function AddVideoPage() {
  const [t] = useTranslation()
  const { state } = useLocation(); console.log(state)
  const redirect = useRedirect()
  const [updateVideoMutation,{isLoading}] = useUpdateVideoMutation()
  const form = useForm<z.infer<typeof updateVideoValidation>>({ 
    resolver:zodResolver(updateVideoValidation),
    defaultValues: {
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
      const response = await updateVideoMutation({values,videoId:state._id}).unwrap()
      toast.success(response.message)
      form.reset({
        image: undefined,
        video: undefined,
        arTitle: undefined,
        arDescription:undefined,
        enDescription:undefined
      })
      redirect("/dashboard/videos")
    } catch (error:any) { console.log(error)
      toast.error(error?.data?.message ?? "try again later")
    }
  }
  return (
    <div className="p-[6%]">
      <ConditionalLoader condition={isLoading} />
      <LinkButton 
        className={` font-semibold gap-2 p-[3%] rtl:flex-row-reverse`} 
        to={".."} text={t("navigators.photos")} direction={"left"}>
       <IoIosArrowRoundBack />
      </LinkButton>
      <Squircle cornerRadius={16} className="rounded border-transparent bg-[#d4d4d420]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-[6%] overflow-x-scroll">
          <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                  <div className="relative ">
                      <Input 
                        className="z-120 opacity-0 cursor-pointer outline w-full h-full  file:bg-slate-800 file:rounded-md border-0"
                        onChange={(e)=>handleFileChange(e, field.onChange)}
                        type="file" 
                        accept="image/*"
                        placeholder="upload the video" />

                        <div className="absolute flex justify-between items-center p-[3%] z-[-1] top-0 w-full h-full rtl:flex-row-reverse ">
                          <h1>
                            {
                              form.getValues("image") ? t("fileSelected") : t("noFileSelected")
                            }
                          </h1>
                          <IconButton className="c4" type="button"  direction={"left"} text={t("changePhoto")} >
                          </IconButton>
                        </div>
                    </div>
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
                  <div className="relative ">
                      <Input 
                        className="z-120 opacity-0 cursor-pointer outline w-full h-full  file:bg-slate-800 file:rounded-md border-0"
                        onChange={(e)=>handleFileChange(e, field.onChange)}
                        type="file" 
                        accept="video/*"/>

                        <div className="absolute flex justify-between items-center p-[3%] z-[-1] top-0 w-full h-full rtl:flex-row-reverse ">
                          <h1>
                            {
                              form.getValues("video") ? t("fileSelected") : t("noFileSelected")
                            }
                          </h1>
                          <IconButton className="c4" type="button"  direction={"left"} text={t("changeVideo")} >
                          </IconButton>
                        </div>
                    </div>
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
      </Squircle>
    </div>
  )
})
export default EditVideoPage
