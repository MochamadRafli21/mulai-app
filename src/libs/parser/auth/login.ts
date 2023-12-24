import { LoginSchema } from "@/libs/zod/auth"

export function loginParser({ email, password }: { email: string, password: string }) {
  return LoginSchema.parse({ email, password })
}
