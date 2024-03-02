import { createServicePayload, parserServicePayload } from "@/libs/types";
import { ServiceSchema } from "@/libs/zod/schema";

export function createServicePayload(payload: parserServicePayload): createServicePayload {
  const parsedPayload = ServiceSchema.parse(payload);
  return parsedPayload;
}
