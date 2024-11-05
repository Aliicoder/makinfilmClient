import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FaGoogle } from "react-icons/fa";
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,FormDescription} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import loginValidation from "@/utils/validations/loginValidation";
import toast from "react-hot-toast";
import { useLoginMutation } from "@/store/Reducers/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setCredentials } from "@/store/Reducers/authReducer";
import IconButton from "../buttons/IconButton";
import { IoLogIn } from "react-icons/io5";
import { useLoader } from "@/hooks/useLoader";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LinkButton from "../buttons/LinkButton";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundBack } from "react-icons/io";
const LogInForm = () => {
  const [showInput,setShowInput] = useState(false)
  const [t] = useTranslation()
  const {setLoading} = useLoader()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectCurrentUser)
  const [login,{isLoading}] = useLoginMutation()
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const form = useForm<z.infer<typeof loginValidation>>({resolver: zodResolver(loginValidation),});//console.log(user)
  const handleShowInput = (status:boolean) =>{
    if(status == true)
      return setShowInput(true)
    setShowInput(false)
  }
  async function onSubmit(values: z.infer<typeof loginValidation>) {
    try { console.log("values >>",values)
      const response = await login(values).unwrap();console.log("response >>",response)
      dispatch(setCredentials(response.user))
      toast.success(`received user ${response.user.accessToken}`)
      setIsLoggedIn(true)
    } catch (error:any) {
      console.log(error)
      toast.error(error?.data?.message ?? "try again later")
    }
  }
  useEffect(()=>{
    console.log("isLoading >>",isLoading);
    setLoading(isLoading)
  },[isLoading])
  useEffect(() => {
    if (isLoggedIn) {
      toast.success(`saved user >> ${user.accessToken}`)
      navigate("/dashboard/videos",{replace:true});
    }
  }, [isLoggedIn]);
  return ( 
   <div className="relative flex justify-center items-center  h-lvh bg-black   ">
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
       className="relative space-8  border border-solid  p-5 rounded-sm bg-white" 
       onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem >
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input autoFocus={false}  placeholder="Enter your email address" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  { 
                    showInput ? 
                    <VscEye onClick={()=>handleShowInput(false)} className="absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2"/>
                    :
                    <VscEyeClosed onClick={()=>handleShowInput(true)} className="absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2" />
                  }
                  <Input autoFocus={false} type={showInput ? "text" : "password"} placeholder="Enter your password"  {...field} />
                </div>
              </FormControl>
              <FormDescription>
                Forgot your password ? <span className="underline cursor-pointer">change password</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <div className="flex justify-end cp-24 mt-[6%]">
          <IconButton {...( isLoading == true ? dispatch: null)} text="Login" direction={"right"}>
            <IoLogIn />
          </IconButton>
        </div>
        <div className="flex justify-center">
          <h1 className="font-medium">or</h1>
        </div>
        <div className="flex  mt-4 ">
          <IconButton className="border w-full bg-white hover:bg-slate-50 text-black" text="via Google" direction={"left"}>
            <FaGoogle className="text-red-500" />
          </IconButton>
        </div>
      </motion.form>
    </Form>
   </div>
   );
}
 
export default LogInForm;