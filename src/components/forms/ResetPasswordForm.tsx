import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useTranslation } from "react-i18next"
import { useResetPasswordMutation } from "@/store/apiSlices/authApiSlice"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import toast from "react-hot-toast"
import resetPasswordValidation from "@/validations/resetPasswordValidation"
import { IResetPasswordForm } from "@/types/types"
import { useState, useEffect } from "react"

const ResetPasswordForm = ({ className }: IResetPasswordForm) => {
  const [t] = useTranslation()
  const [resetPassword] = useResetPasswordMutation()
  const [countdown, setCountdown] = useState(0) // Timer state

  const form = useForm<z.infer<typeof resetPasswordValidation>>({
    resolver: zodResolver(resetPasswordValidation),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof resetPasswordValidation>) {
    try {
      await resetPassword(values).unwrap()
      toast.success(t("reset.success"))
      setCountdown(60) // Start 60 seconds countdown
    } catch (error) {
      toast.error(t("reset.error"))
    }
  }

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)

      return () => clearInterval(timer) // Cleanup on unmount
    }
  }, [countdown])

  return (
    <Form {...form}>
      <form className={` ${className} `} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("loginForm.email")}</FormLabel>
              <FormControl>
                <Input className="border-gray-500" {...field} />
              </FormControl>
              <FormDescription>
                {t("reset.description")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button className="mt-6" type="submit" disabled={countdown > 0}>
          {countdown > 0 ? `${t("wait")} ${countdown}s` : t("continue")}
        </Button>
      </form>
    </Form>
  )
}

export default ResetPasswordForm
