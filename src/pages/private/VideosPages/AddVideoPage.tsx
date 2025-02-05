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
import addVideoValidation from "@/validations/addVideoValidation"
import ConditionalLoader from "@/components/conditionals/ConditionalLoader"
import { t } from "i18next"
import LinkButton from "@/components/buttons/LinkButton"
import { IoIosArrowRoundBack } from "react-icons/io"
import IconButton from "@/components/buttons/IconButton"
import { useAddVideoMutation } from "@/store/apiSlices/videoApiSlice"
import Frame from "@/components/styled/Frame"
import SquircleBorder from "@/components/borders/SquircleBorder"
import Relative from "@/components/styled/Relative"
import Absolute from "@/components/styled/Absolute"
import Text from "@/components/styled/Text"
import formData from "@/utils/functions/formData"

const AddVideoPage = memo(function AddVideoPage() {
  const [addVideoMutation,{isLoading}] = useAddVideoMutation()
  const form = useForm<z.infer<typeof addVideoValidation>>({ resolver:zodResolver(addVideoValidation)})
  const handleFileChange = (e:ChangeEvent<HTMLInputElement>,fieldChange :(value:File)=> void) =>{
    if(e.target.files && e.target.files.length > 0){
      fieldChange(e.target.files[0])
    }
  }
  async function onSubmit(values: z.infer<typeof addVideoValidation>) {
    try { console.log("adding video")
      const credentials = formData(values) 
      const response = await addVideoMutation({credentials}).unwrap()
      toast.success(response.message)
      form.reset({})
    } catch (error:any) { 
      toast.error(error?.data?.message ?? "try again later")
    }
  }
  return (
    <Frame className="p-6">
      <ConditionalLoader condition={isLoading} />
      <LinkButton 
        className={` font-semibold gap-2 p-[3%] rtl:flex-row-reverse`} 
        to={".."} text={t("navigators.videos")} direction={"left"}>
        <IoIosArrowRoundBack />
      </LinkButton>

    <SquircleBorder className="rounded border-transparent bg-[#d4d4d420]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6"
          encType="multipart/form-data">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Relative>
                    <Input 
                      className="relative z-[100] opacity-0 cursor-pointer outline w-full h-full  file:bg-slate-800 file:rounded-md border-0"
                      onChange={(e)=>handleFileChange(e, field.onChange)}
                      type="file" 
                      accept="image/*"/>
                      <Absolute className="absolute top-0 w-full h-full flex justify-between items-center  
                        rtl:flex-row-reverse ">
                        <Text>
                          { form.getValues("image") ? t("fileSelected") : t("noFileSelected") }
                        </Text>
                        <IconButton 
                          className="c4" 
                          type="button"  
                          direction={"left"} 
                          text={t("choosePhoto")} >
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
                      className="relative z-[100] opacity-0 cursor-pointer outline w-full h-full  file:bg-slate-800 file:rounded-md border-0"
                      onChange={(e)=>handleFileChange(e, field.onChange)}
                      type="file" 
                      accept="video/*" />
                      <Absolute className="z-50 top-0 w-full h-full flex justify-between items-center 
                        rtl:flex-row-reverse ">
                        <Text>
                          { form.getValues("video") ? t("fileSelected") : t("noFileSelected") }
                        </Text>
                        <IconButton 
                          className="c4" 
                          type="button"  
                          direction={"left"} 
                          text={t("chooseVideo")} >
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
          <Button type="submit">{t("addVideoForm.submit")}</Button>
        </form>
      </Form>
    </SquircleBorder>
  </Frame>
  )
})
export default AddVideoPage
