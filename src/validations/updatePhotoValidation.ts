import { z } from "zod";

export default z.object({
  photoId:z.string(),
  image: z
  .instanceof(File,{message:"file is required"})
  .refine((file) => file instanceof File && (
      file.type === "image/jpg" || 
      file.type === "image/jpeg" || 
      file.type === "image/webp"), {
    message: "unsupported file type",
  }).optional(),
  arTitle: z.string().min(2, {
    message: "title must be at least 10 characters",
  }),
  enTitle: z.string().min(2, {
    message: "title must be at least 10 characters",
  }),
})