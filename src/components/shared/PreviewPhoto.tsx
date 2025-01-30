import { IPhoto } from "@/types/types"

interface PreviewImage {
  previewPhoto:IPhoto | undefined
  setPreviewPhoto:React.Dispatch<React.SetStateAction<IPhoto | undefined>>
}
function PreviewImage({previewPhoto,setPreviewPhoto}:PreviewImage) {
  return (
    <>
      {previewPhoto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50" onClick={()=>setPreviewPhoto(undefined)}>
          <img src={previewPhoto.image.url} alt="" className="max-w-[90%] max-h-[90%] object-contain" />
        </div>
      )}
    </>
  )
}

export default PreviewImage