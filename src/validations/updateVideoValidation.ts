import { z } from "zod";

export default z.object({
  videoId:z.string(),
  image: z
  .instanceof(File,{message:"file is required"})
  .refine((file) => 
      file.type === "image/jpg" || 
      file.type === "image/jpeg" || 
      file.type === "image/webp" , {
    message: "unsupported file type",
  }).optional(),
  video: z
  .instanceof(File,{message:"file is required"})
  .refine((file) => 
    file.type === "video/mp4" || 
    file.type === "video/webm", {
    message: "unsupported file type",
  }).optional(),
  arTitle: z.string().min(2, {
    message: "title must be at least 10 characters long.",
  }),
  enTitle: z.string().min(2, {
    message: "title must be at least 10 characters long.",
  }),
  arDescription: z.string().min(2, {
    message: "description must be at least 30 characters long.",
  }),
  enDescription: z.string().min(2, {
    message: "description must be at least 30 characters long.",
  }),
})