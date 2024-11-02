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
import addPhotoValidation from "@/utils/validations/addPhotoValidation"
import { useAddPhotoMutation } from "@/store/Reducers/photosApiSlice"
import ConditionalLoader from "@/components/conditionals/ConditionalLoader"
import { useTranslation } from "react-i18next"

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
      const response = await addPhotoMutation(values).unwrap()
      toast.success(response.message)
      form.reset({
        image: undefined,
        arTitle:undefined,
        enTitle:undefined
      })
    } catch (error:any) { console.log(error)
      toast.error(error?.data?.message ?? "try again later")
    }
  }
  return (
    <div className="p-[6%]">
      <ConditionalLoader condition={isLoading} />
      <Squircle cornerRadius={16} className="rounded border-transparent bg-[#d4d4d420]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-[6%] overflow-x-scroll">
          <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Input 
                      className="file:text-slate-500 file:bg-slate-800 file:rounded-md 
                       border-0"
                      onChange={(e)=>handleFileChange(e, field.onChange)}
                      type="file" 
                      accept="image/*"
                      placeholder="upload the video" />
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
