import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,FormDescription} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import loginValidation from "@/utils/validations/loginValidation";
import { useLoginMutation } from "@/store/Reducers/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/Reducers/authReducer";
import IconButton from "../buttons/IconButton";
import { IoLogIn } from "react-icons/io5";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LinkButton from "../buttons/LinkButton";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundBack } from "react-icons/io";
import useShowInput from "@/hooks/useShowInput";

const LogInForm = () => {
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
    }catch(error){} 
  }
  return ( 
   <div 
    className="relative flex justify-center items-center  h-lvh bg-black ">
      <LinkButton className="text-white absolute top-6 left-6 font-semibold gap-2" to={"/"} text={t("navigators.home")} direction={"left"}>
       <IoIosArrowRoundBack />
      </LinkButton>
      <Form {...form}>
      <motion.form
          initial={{
            x:"100vw"
          }} 
          animate={{
            x:0,
          }}
          exit={{
            x:"100vw"
          }}
       className={`   
        relative space-8  p-5 rounded-sm text-white  bg-[#d4d4d420] `} 
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
                {t("loginForm.note")}? <span className="underline cursor-pointer">{t("loginForm.link")}</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <div className="flex justify-end cp-24 mt-[6%] rtl:justify-start">
          <IconButton className="border mt-[10%] rtl:flex-row-reverse" {...( isLoading == true ? dispatch: null)} text={t("loginForm.login")} direction={"right"}>
            <IoLogIn />
          </IconButton>
        </div>
       
      </motion.form>
    </Form>
   </div>
   );
}
 
export default LogInForm;

