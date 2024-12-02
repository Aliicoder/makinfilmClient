import { z } from "zod";

export default z.object({
  image: z
  .any()
  .refine((file) => file instanceof File && file.type === "image/*", {
    message: "Only image of webp format is allowed because it enhance the performance of the website..",
  }),
  arTitle: z.string().min(2, {
    message: "title must be at least 10 characters.",
  }),
  enTitle: z.string().min(2, {
    message: "title must be at least 10 characters.",
  }),
})