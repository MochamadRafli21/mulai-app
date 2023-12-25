import { LoginSchema } from "@/libs/zod/auth"
import { LoginParserPayload } from "@/libs/types"
export function loginParser({ email, password }: LoginParserPayload) {
  return LoginSchema.parse({ email, password })
}
