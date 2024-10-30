import { z } from "zod";

export default z.object({
  image: z
  .any()
  .refine((file) => file instanceof File, {
    message: "Only image files are allowed.",
  }),
  video: z
  .any()
  .refine((file) => file instanceof File , {
    message: "Only video files are allowed.",
  }),
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