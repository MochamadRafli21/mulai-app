import { createOrderPayload, parserOrderPayload } from "@/libs/types/order";
import { OrderSchema } from "@/libs/zod/schema";

export function createOrderPayload(payload: parserOrderPayload): createOrderPayload {
  const parsedPayload = OrderSchema.parse(payload);
  return parsedPayload;
}
