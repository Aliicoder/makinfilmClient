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
import updatePhotoValidation from "@/validations/updatePhotoValidation"
import { useTranslation } from "react-i18next"
import { useLocation, useParams } from "react-router-dom"
import IconButton from "@/components/buttons/IconButton"
import LinkButton from "@/components/buttons/LinkButton"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useUpdatePhotoMutation } from "@/store/apiSlices/photosApiSlice"
import Frame from "@/components/styled/Frame"
import SquircleBorder from "@/components/borders/SquircleBorder"
import Relative from "@/components/styled/Relative"
import Absolute from "@/components/styled/Absolute"
import Text from "@/components/styled/Text"
import formData from "@/utils/functions/formData"

const AddPhotoPage = memo(function AddVideoPage() {
  const { photoId } = useParams()
  const { state } = useLocation()
  const [t,{language}] = useTranslation()
  const [updatePhotoMutation,{isLoading}] = useUpdatePhotoMutation()
  const form = useForm<z.infer<typeof updatePhotoValidation>>({ 
    resolver:zodResolver(updatePhotoValidation),
    defaultValues:{
      photoId,
      arTitle:state.title[language as "ar" | "en"],
      enTitle:state.title[language as "ar" | "en"],
    }
  })
  const handleFileChange = (e:ChangeEvent<HTMLInputElement>,fieldChange :(value:File)=> void) =>{
    if(e.target.files && e.target.files.length > 0){
      fieldChange(e.target.files[0])
    }
  }
  async function onSubmit(values: z.infer<typeof updatePhotoValidation>) {
    try {
      const credentials = formData(values) 
      const response = await updatePhotoMutation({credentials,photoId:values.photoId}).unwrap()
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
        className={`gap-2 p-3 font-semibold rtl:flex-row-reverse`} 
        to={".."} text={t("navigators.photos")} direction={"left"}>
       <IoIosArrowRoundBack />
      </LinkButton>
      <SquircleBorder className=" border-transparent bg-[#d4d4d420]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6" encType="multipart/form-data">

          <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Relative>
                      <Input 
                        className="relative z-[100] w-full h-full opacity-0 cursor-pointer outline border-0  
                          file:bg-slate-800 file:rounded-md "
                        onChange={(e)=>handleFileChange(e, field.onChange)}
                        type="file" 
                        accept="image/*"
                        placeholder="upload the video" />

                        <Absolute className="z-50 top-0 w-full h-full flex justify-between items-center 
                          rtl:flex-row-reverse ">
                          <Text>
                            { form.getValues("image") ? t("fileSelected") : t("noFileSelected")}
                          </Text>
                          <IconButton 
                            className="c4" 
                            type="button"  
                            direction={"left"} 
                            text={t("changePhoto")} >
                          </IconButton>
                        </Absolute>
                    </Relative>
                  </FormControl>
                  <FormDescription>
                    {t("addPhotoForm.image")}
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
                    {t("addPhotoForm.arTitle")}
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
                    {t("addPhotoForm.enTitle")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading ? true : false} type="submit">{t("addPhotoForm.submit")}</Button>
          </form>
        </Form>
      </SquircleBorder>
    </Frame>
  )
})
export default AddPhotoPage
