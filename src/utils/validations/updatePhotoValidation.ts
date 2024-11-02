import { z } from "zod";

export default z.object({
  image: z
  .any()
  .refine((file) => file instanceof File && file.type === "image/webp", {
    message: "Only image of webp format is allowed because it enhance the performance of the website..",
  }).optional(),
  arTitle: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  enTitle: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})