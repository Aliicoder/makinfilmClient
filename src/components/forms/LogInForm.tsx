import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,FormDescription} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import loginValidation from "@/validations/loginValidation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/Reducers/authReducer";
import { IoLogIn } from "react-icons/io5";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useShowInput from "@/hooks/useShowInput";
import { useLoginMutation } from "@/store/apiSlices/authApiSlice"
import FlexRow from "../styled/FlexRow"
import CustomButton from "../buttons/CustomButton"
import toast from "react-hot-toast"
interface ILoginForm {
  className?: string
}
const LogInForm = ({className}:ILoginForm) => {
  const [t,{language}] = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login,{isLoading}] = useLoginMutation()
  const {status,showInput} = useShowInput()
  const form = useForm<z.infer<typeof loginValidation>>({resolver: zodResolver(loginValidation),})
  async function onSubmit(values: z.infer<typeof loginValidation>) {
    try {
      const response = await login(values).unwrap()
      dispatch(setCredentials(response.user))
      navigate("/dashboard/videos")
    }catch(error:any){
      console.log(error)
      toast.error(error.data.message ?? "something went wrong , try again later")
    } 
  }
  return (
    <Form {...form}>
      <form
       className={` ${className} `} 
       onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem >
              <FormLabel 

                className="">{t("loginForm.email")}</FormLabel>
              <FormControl>
                <Input className="border-gray-500" autoFocus={false}   {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("loginForm.password")}</FormLabel>
              <FormControl>
                <div className="relative">
                  { 
                    status ? 
                    <VscEye
                      onClick={()=>showInput(false)} 
                      className={` ${language == "ar" ? "left-2 translate-x-1/2" : "right-2 -translate-x-1/2" } 
                        absolute top-1/2  -translate-x-1/2 -translate-y-1/2`}/>
                    :
                    <VscEyeClosed 
                      onClick={()=>showInput(true)} 
                      className={` ${language == "ar" ? "left-2 translate-x-1/2" : "right-2 -translate-x-1/2" } 
                        absolute top-1/2   -translate-y-1/2`} />
                  }
                  <Input 
                     style={{
                      left: language == "en" ? "0.5rem" : "",
                      right: language == "ar" ? "0.5rem" : ""
                    }}
                  className="border-gray-500" autoFocus={false} type={status ? "text" : "password"}   {...field} />
                </div>
              </FormControl>
              <FormDescription className="text-white">
                {t("loginForm.note")}? <Link to={"resetPassword"} className="underline cursor-pointer">{t("loginForm.link")}</Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <FlexRow className="mt-6 justify-end  
          rtl:justify-start">
          <CustomButton 
            className="px-3 py-2 flex items-center rounded-md border  
            rtl:flex-row-reverse" 
            {...( isLoading == true ? dispatch: null)} 
            text={t("loginForm.login")} 
            direction={"right"}>
            <IoLogIn />
          </CustomButton>
        </FlexRow>
       
      </form>
    </Form>
   );
}
 
export default LogInForm;

