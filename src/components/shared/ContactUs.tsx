import { useTranslation } from "react-i18next"
import FlexRow from "../styled/FlexRow"
import Text from "../styled/Text"
import FlexCol from "../styled/FlexCol"
import Frame from "../styled/Frame"
import FlexColContainer from "../styled/FlexColContainer"
import FlexRowContainer from "../styled/FlexRowContainer"
import CustomButton from "../buttons/CustomButton"
import { FiArrowUpRight } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const ContactUs = () => {
  const navigate = useNavigate()
  const [t] = useTranslation()
  return (
    <FlexCol className="mt-12">
      <FlexRowContainer className="p-10">
        <Text className="z-10 fs-25 text-white  bg-black font-semibold 
          md:c5">
          {t("contactUs")}
        </Text>
      </FlexRowContainer>
      <Frame className="bg-[#d4d4d420]">
        <FlexColContainer className=" p-8 text-white  ">
          <FlexRow className="justify-evenly p-[6%] 
            rtl:flex-row-reverse">
            <a className="cursor-pointer" href="https://www.facebook.com/makinfilm/" >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.17 19.585C39.17 8.77409 30.3959 0 19.585 0C8.77408 0 0 8.77409 0 19.585C0 29.0642 6.73724 36.9569 15.668 38.7783V25.4605H11.751V19.585H15.668V14.6888C15.668 10.9089 18.7428 7.83401 22.5227 7.83401H27.419V13.7095H23.502C22.4248 13.7095 21.5435 14.5908 21.5435 15.668V19.585H27.419V25.4605H21.5435V39.0721C31.4339 38.0929 39.17 29.7496 39.17 19.585Z" fill="white"/>
              </svg>
            </a>
            <a className="cursor-pointer" href="https://twitter.com/makinfilm?lang=ar">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M39.92 39.0416L24.3087 16.2874L24.3354 16.3087L38.4112 0H33.7075L22.2409 13.2741L13.135 0H0.798741L15.3733 21.244L15.3716 21.2422L0 39.0416H4.70378L17.4519 24.2732L27.5837 39.0416H39.92ZM11.2713 3.54922L33.1749 35.4924H29.4474L7.52609 3.54922H11.2713Z" fill="white"/>
              </svg>
            </a>
            <a className="cursor-pointer" href="https://vimeo.com/makinfilm">
              <svg width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.1681 8.8638C43.9694 13.1702 40.9659 19.0666 35.1578 26.5752C29.151 34.4372 24.0716 38.3019 19.8757 38.3019C17.336 38.3019 15.1497 35.9168 13.3609 31.1245C12.1462 26.7961 11.042 22.4234 9.80532 18.0508C8.48028 13.2806 7.0669 10.8955 5.52101 10.8955C5.21184 10.8955 4.06347 11.6022 2.0759 12.9935L0 10.2993C2.20841 8.37795 4.32848 6.45663 6.44854 4.53532C9.36364 2.01773 11.55 0.692688 12.9854 0.560184C16.4305 0.206839 18.5506 2.59192 19.3456 7.62709C20.2069 13.0819 20.8032 16.4607 21.1344 17.7858C22.0841 22.2909 23.1883 24.4993 24.4029 24.4993C25.3304 24.4993 26.7217 23.0859 28.5768 20.1488C30.4318 17.2337 31.4256 15.0032 31.5581 13.4573C31.8231 10.9397 30.8293 9.68091 28.5768 9.68091C27.5167 9.68091 26.4346 9.92383 25.3083 10.4097C27.4726 3.27652 31.6244 -0.190675 37.7417 0.00808198C42.291 0.140586 44.4331 3.09985 44.1681 8.8638Z" fill="white"/>
              </svg>
            </a>
            <a className="cursor-pointers" href="https://www.instagram.com/makinfilm/">
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.2748 3.91699H31.7248C37.9915 3.91699 43.0832 9.00866 43.0832 15.2753V31.7253C43.0832 34.7377 41.8865 37.6268 39.7564 39.7569C37.6263 41.887 34.7373 43.0837 31.7248 43.0837H15.2748C9.00817 43.0837 3.9165 37.992 3.9165 31.7253V15.2753C3.9165 12.2629 5.11318 9.37387 7.24328 7.24377C9.37338 5.11367 12.2624 3.91699 15.2748 3.91699ZM14.8832 7.83366C13.0134 7.83366 11.2202 8.57642 9.89807 9.89856C8.57594 11.2207 7.83317 13.0139 7.83317 14.8837V32.117C7.83317 36.0141 10.9861 39.167 14.8832 39.167H32.1165C33.9863 39.167 35.7795 38.4242 37.1016 37.1021C38.4237 35.78 39.1665 33.9868 39.1665 32.117V14.8837C39.1665 10.9866 36.0136 7.83366 32.1165 7.83366H14.8832ZM33.7811 10.7712C34.4303 10.7712 35.053 11.0291 35.512 11.4881C35.9711 11.9472 36.229 12.5698 36.229 13.2191C36.229 13.8683 35.9711 14.4909 35.512 14.95C35.053 15.4091 34.4303 15.667 33.7811 15.667C33.1319 15.667 32.5092 15.4091 32.0501 14.95C31.5911 14.4909 31.3332 13.8683 31.3332 13.2191C31.3332 12.5698 31.5911 11.9472 32.0501 11.4881C32.5092 11.0291 33.1319 10.7712 33.7811 10.7712ZM23.4998 13.7087C26.0967 13.7087 28.5873 14.7403 30.4236 16.5766C32.2599 18.4129 33.2915 20.9034 33.2915 23.5003C33.2915 26.0972 32.2599 28.5878 30.4236 30.4241C28.5873 32.2604 26.0967 33.292 23.4998 33.292C20.9029 33.292 18.4124 32.2604 16.5761 30.4241C14.7398 28.5878 13.7082 26.0972 13.7082 23.5003C13.7082 20.9034 14.7398 18.4129 16.5761 16.5766C18.4124 14.7403 20.9029 13.7087 23.4998 13.7087ZM23.4998 17.6253C21.9417 17.6253 20.4474 18.2443 19.3456 19.3461C18.2438 20.4478 17.6248 21.9422 17.6248 23.5003C17.6248 25.0585 18.2438 26.5528 19.3456 27.6546C20.4474 28.7564 21.9417 29.3753 23.4998 29.3753C25.058 29.3753 26.5523 28.7564 27.6541 27.6546C28.7559 26.5528 29.3748 25.0585 29.3748 23.5003C29.3748 21.9422 28.7559 20.4478 27.6541 19.3461C26.5523 18.2443 25.058 17.6253 23.4998 17.6253Z" fill="white"/>
              </svg>
            </a>
          </FlexRow>
          <FlexRow className="flex-col md:flex-row md:justify-evenly 
            md:px-12">
            <Frame className="p-6">
              <h1 className=" ">{t("email")}</h1>
              <p className="pt-[3%]">info@makinfilm.com</p>
            </Frame>
            <Frame className="p-6">
              <h1>{t("address")}</h1>
              <a  href="https://maps.app.goo.gl/u8pzA6ZE4zh1BrcR8?g_st=com.google.maps.preview.copy"
              target="_blank" className=" underline pt-[3%]">{t("riyadh")}</a>
            </Frame>
            <Frame className="p-6">
              <h1>{t("contactNumbers")}</h1>
              <p className="pt-[3%]">011 291 1442</p>
              <p>053 389 9206</p>
              <p>056 028 7771</p>
            </Frame>
          </FlexRow>
          <FlexRow className="pr-12 mt-6">
            <CustomButton text={t("dashboard")} 
              onClick={()=>navigate("login")}
              className="gap-2 p-3 py-2 flex items-center rounded-md border border-white">
              <FiArrowUpRight />
            </CustomButton>
          </FlexRow>
          <FlexRow className="p-12 justify-center">
            {t("footer.text")} 
          </FlexRow>
        </FlexColContainer>
      </Frame>
    </FlexCol>
  )
}

export default ContactUs