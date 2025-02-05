import CustomButton from "@/components/buttons/CustomButton"
import LogInForm from "@/components/forms/LogInForm"
import FlexColContainer from "@/components/styled/FlexColContainer"
import FlexRow from "@/components/styled/FlexRow"
import { useTranslation } from "react-i18next"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
function LogInPage() {
  const [t] = useTranslation()
  const navigate = useNavigate()
  return (
    <FlexColContainer className='p-6 bg-black justify-between h-lvh'>
      <FlexRow className="rtl:justify-end">
        <CustomButton 
          onClick={() => navigate("/")}
          className="flex items-center text-white font-semibold gap-2
          rtl:flex-row-reverse" 
          text={t("navigators.home")} 
          direction={"left"}>
          <IoIosArrowRoundBack />
        </CustomButton>
      </FlexRow>
      <FlexRow className="justify-center">
        <LogInForm className="gap-3 space-8 p-5  rounded-sm text-white  bg-[#d4d4d420] " />
      </FlexRow>
      <div />
    </FlexColContainer>
  )
}

export default LogInPage