interface PreviewImage {
  selectedImage?:string
  handleExpand:(image:string)=>void
}
function PreviewImage({selectedImage,handleExpand}:PreviewImage) {
  return (
    <>
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50" onClick={()=>handleExpand("")}>
          <img src={selectedImage} alt="" className="max-w-[90%] max-h-[90%] object-contain" />
        </div>
      )}
    </>
  )
}

export default PreviewImage