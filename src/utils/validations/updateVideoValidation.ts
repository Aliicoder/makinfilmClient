import { z } from "zod";

export default z.object({
  image: z
  .any()
  .refine((file) => file instanceof File || typeof file == "string", {
    message: "Only image files are allowed.",
  }).optional(),
  video: z
  .any()
  .refine((file) => file instanceof File || typeof file == "string"  , {
    message: "Only video files are allowed.",
  }).optional(),
  arTitle: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  enTitle: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  arDescription: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  enDescription: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})