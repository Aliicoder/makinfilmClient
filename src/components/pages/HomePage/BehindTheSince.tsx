import { memo, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { IMAGES } from "@/constants/media/behindTheSince";
import Masonry from "react-masonry-css"
import Text from "@/components/styled/Text";
import FlexRow from "@/components/styled/FlexRow";
import FlexColContainer from "@/components/styled/FlexColContainer";
import SquircleBorder from "@/components/borders/SquircleBorder";
import Div from "@/components/styled/Div";
import CustomButton from "@/components/buttons/CustomButton";
import FixedFlex from "@/components/styled/FixedFlex";
import { useNavigate } from "react-router-dom";
const BehindTheSince = memo(function BehindTheSince() {
  const navigate = useNavigate()
  const [t,{language}] = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string|undefined>();

  const handleExpand = (image:string) => {
    setSelectedImage(image ? image : undefined);
  };

  return (
    <FlexColContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <FlexRow className="p-12">
        <Text className="z-10 fs-25 text-white  bg-black font-semibold ">
          {t("behindTheSince")}
        </Text>
      </FlexRow>

      <Masonry
        breakpointCols={{
          default:4,
          640:2,
          768:4
        }}
        className="my-masonry-grid"
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}>
        {IMAGES.map((image, i) => (
          <Div
            key={i} 
            initial={{  opacity: 0, y: 60 }}
            whileInView={{ opacity: 1 , y: 0 , transition: 
              { type : "tween" , delay: 0.5 * i , duration: 0.5 , ease: "easeInOut"},
            }}
            layout
            viewport={{ once: true }}
            className="p-[6%]"
            onClick={() => handleExpand(image)}
          >
            <SquircleBorder>
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 cursor-pointer hover:scale-105 transition-all"
                src={image}
                loading="lazy"
                alt=""
              />
            </SquircleBorder>
          </Div>
        ))}
      </Masonry>
      <FlexRow className="p-6 justify-end font-normal 
        rtl:justify-start">
        <CustomButton 
          className="gap-2 p-3 py-2 flex items-center  border rounded-lg bg-white text-black"
          text={`${t("ViewMoreButton")}`}
          direction={"right"}
          onClick={()=>navigate("/photos")}
        >
          <FiArrowUpRight />
        </CustomButton>
      </FlexRow>

      {selectedImage && (
        <FixedFlex
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={()=>handleExpand("")}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </FixedFlex>
      )}
    </FlexColContainer>
  );
});

export default BehindTheSince;


// <RelativeFlex className="justify-center">
// <Text className="z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold 
//   md:c5 md:p-[2%]">
//   {t("behindTheSince")}
// </Text>
// <Absolute className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"/>
// </RelativeFlex>