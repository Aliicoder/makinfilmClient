import ReactDOM from "react-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import IconButton from "../buttons/IconButton";
import { IoClose } from "react-icons/io5";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { IPhoto } from "@/utils/types/types";
import { Squircle } from "corner-smoothing";
import { useDeletePhotoMutation } from "@/store/Reducers/photosApiSlice";
interface DeleteVideoParams {
  condition: boolean
  photo?:IPhoto
  setIsDeletePhoto:React.Dispatch<React.SetStateAction<boolean>>
}
function DeletePhotoPortal({condition,photo,setIsDeletePhoto}:DeleteVideoParams) {
  const [deletePhotoMutation,{isLoading}] = useDeletePhotoMutation();
  let popUpsRef = useRef<HTMLDivElement | null>(null)
  const portalElement = document.getElementById("portals");
  if (!portalElement) {
    return null; 
  }
  const handleClosePopUp = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(!popUpsRef.current?.contains(e.target as Node)){ 
      setIsDeletePhoto(false);
    }
  }
  const handleVideoDeletion = async( )=> {
    try { console.log(photo?._id)
      const response = await deletePhotoMutation({photoId:photo?._id}).unwrap();console.log("response >>",response)
      toast.success(response.message)
      window.location.reload()
    } catch (error:any) { console.log(error)
      toast.error(error?.data?.message ?? "try again later")
    }
  }
  return ReactDOM.createPortal(
   <>
      {condition&&<div onClick={handleClosePopUp} className="absolute bg-[#00000057] z-50 grid w-[100vw] h-[100vh] ">
       <div className="place-self-center " ref={popUpsRef}>
         <Squircle cornerRadius={16} className="bg-[#d4d4d420] text-white flex flex-col p-[10%] rounded montserrat w-fit">
            <div onClick={()=>setIsDeletePhoto(false)} className="flex ">
              <IoClose  />
            </div>
           <h1 className="text-nowrap font-semibold my-[5%] " >Are sure you want to delete ?</h1>
           <div className="flex cp-6 justify-end  ">
            <IconButton onClick={handleVideoDeletion} disabled={isLoading ? true : false}  className="bg-red-500 mt-[3%]" direction="left" text="Delete" >
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