import { z } from "zod";

export default z.object({
  image: z
  .instanceof(File,{message:"file is required"})
  .refine((file) => file instanceof File && (
      file.type === "image/jpg" || 
      file.type === "image/jpeg" || 
      file.type === "image/webp"), {
    message: "unsupported file type",
  }),
  arTitle: z.string().min(10, {
    message: "title must be at least 10 characters.",
  }),
  enTitle: z.string().min(10, {
    message: "title must be at least 10 characters.",
  }),
})