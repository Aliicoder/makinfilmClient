import { memo, useState } from "react";
import LinkButton from "../buttons/LinkButton";
import { FiArrowUpRight } from "react-icons/fi";
import { Squircle } from "corner-smoothing";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";

const BehindTheSince = memo(function BehindTheSince() {
  const [t,{language}] = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string|undefined>();

  const handleExpand = (image:string) => {
    setSelectedImage(image ? image : undefined);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="container mx-auto c9 mt-[6%] p-[3%]"
    >
      <div className="relative flex justify-center">
        <h1 className="relative z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold md:c5 md:p-[2%]">
          {t("behindTheSince")}
        </h1>
        <div className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"></div>
      </div>
      <div
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}
        className="columns-2 gap-0 my-[6%] md:columns-4">
        {IMAGES.map((image, i) => (
          <motion.div
            key={i} 
            initial={{  opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {delay: 0.2 * i , ease: "easeInOut"},
            }}
            viewport={{ once: true }}
            className="p-[6%]"
            onClick={() => handleExpand(image)}
          >
            <Squircle cornerRadius={16} className="border-transparent rounded-[16px]">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 cursor-pointer hover:scale-105 transition-all"
                src={image}
                loading="lazy"
                alt=""
              />
            </Squircle>
          </motion.div>
        ))}
      </div>
      <div className="flex font-normal justify-end p-[6%] rtl:justify-start">
        <LinkButton
          className="bg-white c8 text-black px-[4%] py-[2%] border ring-4 md:px-[2%] md:py-[1%] md:c3 ring-[#fafafa42] outline-8 outline-[#fafafa28] outline"
          text={`${t("ViewMoreButton")}`}
          to={"/photos"}
          direction={"right"}
        >
          <FiArrowUpRight />
        </LinkButton>
      </div>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={()=>handleExpand("")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 ,animation:"ease" }}
        >
          <motion.img
            initial={{ scale: 0.5 ,animation:"ease" }}
            animate={{ scale: 1 , animation:"ease" ,transition:{
              bounce: true
            }}}
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </motion.div>
      )}
    </motion.div>
  );
});

export default BehindTheSince;
