import { z } from "zod";

export default z.object({
  password: z.string().min(6, {
    message: "Your password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Your password must be at least 6 characters.",
  }),
})
.superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      path: ["confirmPassword"],
      message: "Passwords do not match.",
      code: "custom",
    });
  }
});