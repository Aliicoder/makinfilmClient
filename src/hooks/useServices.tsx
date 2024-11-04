import { useTranslation } from 'react-i18next'

function useServices () {
  const [t] = useTranslation()
  const SERVICES = [
    <div className="flex justify-end my-[6%] rtl:justify-start w-full h-full ">
    <div className="flex flex-col basis-2/3 md:basis-full 
      p-[5%] bg-[#d4d4d420] rounded-tl-[16px] rounded-bl-[16px] md:rounded-[16px]">
        <div className="flex items-center ">
          <div className="bg-[#D4D4D4]  rounded-full p-[6%] mx-[6%]">
            <svg className="c8" width="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3278 5.54199H6.67184C3.29784 5.54199 1.60984 5.54199 0.661841 6.52899C-0.286159 7.51599 -0.063159 9.03999 0.383841 12.089L0.805841 14.981C1.15584 17.372 1.33084 18.568 2.22784 19.284C3.12584 20 4.44784 20 7.09484 20H12.9048C15.5508 20 16.8748 20 17.7718 19.284C18.6688 18.568 18.8438 17.372 19.1938 14.981L19.6158 12.089C20.0628 9.03999 20.2858 7.51599 19.3378 6.52899C18.3898 5.54199 16.7018 5.54199 13.3278 5.54199ZM12.5808 13.794C13.1398 13.448 13.1398 12.552 12.5808 12.206L9.20984 10.116C8.66684 9.77899 7.99984 10.217 7.99984 10.91V15.09C7.99984 15.783 8.66684 16.22 9.20984 15.884L12.5808 13.794Z" fill="black"/>
              <path opacity="0.4" d="M6.50997 0H13.49C13.722 0 13.9 1.05239e-07 14.056 0.0150001C15.164 0.124 16.071 0.79 16.456 1.687H3.54297C3.92697 0.79 4.83397 0.124 5.94197 0.0150001C6.09897 1.05239e-07 6.27697 0 6.50997 0Z" fill="black"/>
              <path opacity="0.7" d="M4.30998 2.72266C2.91998 2.72266 1.77998 3.56266 1.39898 4.67566L1.37598 4.74566C1.77398 4.62566 2.18798 4.54666 2.60798 4.49266C3.68798 4.35466 5.05398 4.35466 6.63998 4.35466H13.532C15.118 4.35466 16.483 4.35466 17.564 4.49266C17.9806 4.54453 18.3926 4.62912 18.796 4.74566L18.773 4.67566C18.393 3.56166 17.252 2.72266 15.861 2.72266H4.30998Z" fill="black"/>
            </svg>
          </div>
          <h1 className="text-white c8 text-nowrap md:c4 md:font-semibold">{t("videosProduction")}</h1>
          </div>
          <p className="c5 p-[6%] text-white md:4">
            {t("videosProductionPara")}
          </p>
      </div>
    </div>
    ,
    <div className="flex  my-[6%] rtl:justify-end w-full h-full">
      <div className="flex flex-col basis-2/3 md:basis-full
      p-[5%] bg-[#d4d4d420] rounded-tr-[16px] rounded-br-[16px] md:rounded-[16px]">
        <div className="flex justify-end items-center md:flex-row-reverse  rtl:flex-row-reverse">
          <h1 className="text-white c8 text-nowrap md:c4 md:font-semibold">{t("advertisements")}</h1>
          <div className="bg-[#D4D4D4]  rounded-full p-[6%] mx-[6%]">
            <svg className="c8" width="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.999466C15.9999 0.829075 15.9563 0.661533 15.8733 0.512738C15.7902 0.363943 15.6706 0.23883 15.5256 0.149272C15.3806 0.0597132 15.2152 0.00867941 15.045 0.00101288C14.8748 -0.00665365 14.7054 0.0293013 14.553 0.105466L6.763 3.99947H3C2.20435 3.99947 1.44129 4.31554 0.87868 4.87815C0.316071 5.44076 0 6.20382 0 6.99947C0 7.79512 0.316071 8.55818 0.87868 9.12079C1.44129 9.6834 2.20435 9.99947 3 9.99947H3.28L5.051 15.3155C5.11735 15.5147 5.24472 15.6879 5.41505 15.8107C5.58538 15.9335 5.79004 15.9995 6 15.9995H7C7.26522 15.9995 7.51957 15.8941 7.70711 15.7066C7.89464 15.519 8 15.2647 8 14.9995V10.6175L14.553 13.8935C14.7054 13.9696 14.8748 14.0056 15.045 13.9979C15.2152 13.9903 15.3806 13.9392 15.5256 13.8497C15.6706 13.7601 15.7902 13.635 15.8733 13.4862C15.9563 13.3374 15.9999 13.1699 16 12.9995V0.999466Z" fill="black"/>
            </svg>
          </div>
          </div>
          <p className="c5 p-[6%] text-white">
            {t("advertisementPara")}
          </p>
      </div>
    </div>
    ,
    <div className="flex justify-end my-[6%] md:justify-center rtl:justify-start w-full h-full">
      <div className="flex flex-col basis-2/3 md:basis-full p-[5%] bg-[#d4d4d420] rounded-tl-[16px] rounded-bl-[16px] md:rounded-[16px]">
        <div className="flex items-center ">
          <div className="bg-[#D4D4D4]  rounded-full p-[6%] mx-[6%]">
          <svg className="c8" width="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C11.845 0 13.33 5.96046e-08 14.54 0.0880001L11.1 5.25H6.4L9.9 0H10ZM1.464 1.464C2.717 0.212 4.622 0.0309999 8.096 0.00399995L4.599 5.25H0.104004C0.251004 3.486 0.607004 2.322 1.464 1.464Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 8.763 2.23517e-08 7.689 0.026 6.75H19.974C20 7.689 20 8.763 20 10C20 14.714 20 17.071 18.535 18.535C17.072 20 14.714 20 10 20C5.286 20 2.929 20 1.464 18.535C0 17.072 0 14.714 0 10ZM11.014 10.585C12.338 11.44 13 11.867 13 12.5C13 13.133 12.338 13.56 11.014 14.415C9.672 15.281 9.001 15.714 8.5 15.395C8 15.078 8 14.219 8 12.5C8 10.781 8 9.922 8.5 9.604C9 9.286 9.672 9.719 11.014 10.585Z" fill="black"/>
            <path d="M19.996 4.946C19.849 3.182 19.493 2.018 18.636 1.16C18.038 0.563 17.292 0.21 16.299 0L13 4.946H19.996Z" fill="black"/>
            </svg>
          </div>
          <h1 className="text-white c8 text-nowrap md:c4 md:font-semibold">{t("cinematography")}</h1>
          </div>
          <p className="c5 p-[6%] text-white">
            {t("cinematographyPara")}
          </p>
      </div>
    </div>
    ,
  <div className="flex  my-[6%] md:justify-center rtl:justify-end w-full h-full">
    <div className="flex flex-col basis-2/3 md:basis-full
    p-[5%] bg-[#d4d4d420] rounded-tr-[16px] rounded-br-[16px] md:rounded-[16px]">
      <div className="flex justify-end items-center md:flex-row-reverse rtl:flex-row-reverse">
        <h1 className="text-white c8 text-nowrap md:c4 md:font-semibold">{t("eventsCoverage")}</h1>
        <div className="bg-[#D4D4D4]  rounded-full p-[6%] mx-[6%]">
          <svg className="c8" width="1em" height="1em" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2H14V0H4V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C4.70625 10.6894 5.2002 11.3505 5.82916 11.8662C6.45813 12.3819 7.2032 12.7367 8 12.9V16H4V18H14V16H10V12.9C10.7968 12.7367 11.5419 12.3819 12.1708 11.8662C12.7998 11.3505 13.2937 10.6894 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z" fill="black"/>
          </svg>
        </div>
        </div>
        <p className="c5 p-[6%] text-white">
        {t("eventsCoveragePara")}
        </p>
    </div>
  </div>
  ]
  return SERVICES
}

export default useServices
 