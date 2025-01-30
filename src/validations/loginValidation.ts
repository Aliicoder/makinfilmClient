import { z } from "zod";

export default  z.object({
  email: z.string().email().min(2, {
  }),
  password: z.string().min(8, {
  }),
  rememberMe: z.boolean().default(false).optional(),
})
