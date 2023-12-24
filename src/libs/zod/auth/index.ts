import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email().nonempty('Email Field is required'),
  password: z.string().nonempty('Password Field is required'),
});
