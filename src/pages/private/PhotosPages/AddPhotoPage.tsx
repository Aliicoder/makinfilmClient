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
import addPhotoValidation from "@/validations/addPhotoValidation"
import ConditionalLoader from "@/components/conditionals/ConditionalLoader"
import { useTranslation } from "react-i18next"
import LinkButton from "@/components/buttons/LinkButton"
import { IoIosArrowRoundBack } from "react-icons/io"
import IconButton from "@/components/buttons/IconButton"
import { useAddPhotoMutation } from "@/store/apiSlices/photosApiSlice"

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
      await addPhotoMutation(values).unwrap()
      form.reset({
        image: undefined,
        arTitle:undefined,
        enTitle:undefined
      })
    } catch (error) {}
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-[6%] ">
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
                          <IconButton className="c4" type="button"  direction={"left"} text={t("choosePhoto")} >
                          </IconButton>
                        </div>
                    </div>
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
      </Squircle>
    </div>
  )
})
export default AddPhotoPage
