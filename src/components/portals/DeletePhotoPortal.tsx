import ReactDOM from "react-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import IconButton from "../buttons/IconButton";
import { IoClose } from "react-icons/io5";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { IPhoto } from "@/utils/types/types";
import { Squircle } from "corner-smoothing";
import { useDeletePhotoMutation , util} from "@/store/Reducers/photosApiSlice";
import { useTranslation } from "react-i18next";
interface DeleteVideoParams {
  photo?:IPhoto
  setPhotoToBeDeleted:React.Dispatch<React.SetStateAction<IPhoto | undefined>>
}
function DeletePhotoPortal({photo,setPhotoToBeDeleted}:DeleteVideoParams) {
  const [t] = useTranslation()
  const [deletePhotoMutation,{isLoading}] = useDeletePhotoMutation();
  let popUpsRef = useRef<HTMLDivElement | null>(null)
  const portalElement = document.getElementById("portals");
  if (!portalElement) {
    return null; 
  }
  const handleClosePopUp = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(!popUpsRef.current?.contains(e.target as Node)){ 
      setPhotoToBeDeleted(undefined);
    }
  }
  const handlePhotoDeletion = async( )=> {
    try { console.log(photo?._id)
      const response = await deletePhotoMutation({photoId:photo?._id}).unwrap()
      toast.success(response.message)
      util.invalidateTags(["Photos"])
    } catch (error:any) { }
  }
  return ReactDOM.createPortal(
   <>
      {photo&&<div onClick={handleClosePopUp} className="absolute bg-[#00000057] z-[100] grid w-[100vw] h-[100vh] ">
       <div className="place-self-center " ref={popUpsRef}>
         <Squircle cornerRadius={16} className="bg-[#303030] text-white flex flex-col p-[10%] rounded montserrat w-fit">
            <div onClick={()=>setPhotoToBeDeleted(undefined)} className="flex ">
              <IoClose  />
            </div>
           <h1 className="text-nowrap font-semibold my-[5%] " >{t("deleteAlert")}</h1>
           <div className="flex cp-6 justify-end  ">
            <IconButton onClick={handlePhotoDeletion} disabled={isLoading ? true : false}  className="bg-red-500 mt-[3%]" direction="left" text={t("delete")} >
              <AiTwotoneDelete />
            </IconButton>
          </div>
         </Squircle>
       </div>
      </div>}
   </>
    ,
    portalElement
  );
}

export default DeletePhotoPortal;
