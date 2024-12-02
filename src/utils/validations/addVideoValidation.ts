import { z } from "zod";

export default z.object({
  image: z
  .any()
  .refine((file) => file instanceof File && file.type === "image/*", {
    message: "only image of webp format is allowed because it enhance the performance of the website.",
  }),
  video: z
  .any()
  .refine((file) => file instanceof File  , {
    message: "only video of webm format is allowed because it enhance the performance of the website.",
  }),
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