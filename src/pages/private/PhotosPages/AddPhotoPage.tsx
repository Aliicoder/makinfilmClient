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
import addPhotoValidation from "@/validations/addPhotoValidation"
import ConditionalLoader from "@/components/conditionals/ConditionalLoader"
import { useTranslation } from "react-i18next"
import LinkButton from "@/components/buttons/LinkButton"
import { IoIosArrowRoundBack } from "react-icons/io"
import IconButton from "@/components/buttons/IconButton"
import { useAddPhotoMutation } from "@/store/apiSlices/photosApiSlice"
import Frame from "@/components/styled/Frame"
import SquircleBorder from "@/components/borders/SquircleBorder"
import Relative from "@/components/styled/Relative"
import Absolute from "@/components/styled/Absolute"
import Text from "@/components/styled/Text"
import formData from "@/utils/functions/formData"
import toast from "react-hot-toast"

const AddPhotoPage = memo(function AddVideoPage() {
  const [t] = useTranslation()
  const [addPhotoMutation,{isLoading}] = useAddPhotoMutation()
  const form = useForm<z.infer<typeof addPhotoValidation>>({ resolver:zodResolver(addPhotoValidation)})
  const handleFileChange = (e:ChangeEvent<HTMLInputElement>,fieldChange :(value:File)=> void) =>{
    if(e.target.files && e.target.files.length > 0){
      fieldChange(e.target.files[0])
    }
  }
  async function onSubmit(values: z.infer<typeof addPhotoValidation>) {
    try {
      const credentials = formData(values) 
      const response = await addPhotoMutation({credentials}).unwrap(); console.log("response df",response)
      toast.success(response.message)
      form.reset({})
    } catch (error:any) {
      toast.error(error.message || "something went wrong , try again later")
    }
  }
  return (
    <>
      <ConditionalLoader condition={isLoading} />
      <Frame className="p-6">
        <LinkButton 
          className={`gap-2 p-3 font-semibold  rtl:flex-row-reverse`} 
          to={".."} 
          text={t("navigators.photos")} 
          direction={"left"}>
         <IoIosArrowRoundBack />
        </LinkButton>
        <SquircleBorder className="rounded border-transparent bg-[#d4d4d420]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-8" encType="multipart/form-data">
            <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Relative>

                        <Input 
                          className="relative z-50 opacity-0 w-full h-full  cursor-pointer outline  border-0
                          file:bg-slate-800 file:rounded-md "
                          onChange={(e)=>handleFileChange(e, field.onChange)}
                          type="file" 
                          accept="image/*"
                          placeholder="upload the video" />

                          <Absolute className="z-40 top-0 flex justify-between items-center w-full h-full  
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
              <Button type="submit">{t("addPhotoForm.submit")}</Button>
            </form>
          </Form>
        </SquircleBorder>
      </Frame>
   </>
  )
})
export default AddPhotoPage
