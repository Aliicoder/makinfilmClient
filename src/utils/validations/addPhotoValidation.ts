import { z } from "zod";

export default z.object({
  image: z
  .any()
  .refine((file) => file instanceof File, {
    message: "Only image files are allowed.",
  }),
  arDescription: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  enDescription: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})