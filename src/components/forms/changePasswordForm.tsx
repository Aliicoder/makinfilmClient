import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import { useTranslation } from "react-i18next";
import { useChangePasswordMutation } from "@/store/apiSlices/authApiSlice"
import { Button } from "../ui/button"
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import changePasswordValidation from "@/validations/changePasswordValidation";
interface IChangePasswordForm {
  className?: string
}
const ChangePasswordForm = ({className}:IChangePasswordForm) => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token") 
  const [t] = useTranslation()
  const [changePassword] = useChangePasswordMutation()
  const form = useForm<z.infer<typeof changePasswordValidation>>({
    resolver: zodResolver(changePasswordValidation),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })
  async function onSubmit(values: z.infer<typeof changePasswordValidation>) {
    try {
      await changePassword({password:values.password,passwordResetToken:token}).unwrap() 
      toast.success(t("changePassword.success"));
    }catch(error){
      toast.error(t("changePassword.error"))
    } 
  }
  return (
    <Form {...form}>
      <form
       className={` ${className} `} 
       onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("loginForm.password")}</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("loginForm.confirmPassword")}</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-6" type="submit">{t("continue")}</Button>
      </form>
    </Form>
   );
}
 
export default ChangePasswordForm;

