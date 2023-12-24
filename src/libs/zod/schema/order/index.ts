import { z } from "zod";

export const OrderSchema = z.object({
  discount: z.number().default(0),
  total_price: z.number().default(0),
  title: z.string().default('').optional(),
  description: z.string().nonempty('Description Field is required'),
  customer_name: z.string().nonempty('Name Field is required'),
  customer_phone: z.string().nonempty('Phone Field is required'),
  customer_email: z.string().email().optional(),
  task: z.array(z.object({
    title: z.string(),
    description: z.string(),
    service: z.string(),
    status: z.string().default('pending'),
    is_active: z.boolean().default(true),
    price: z.number(),
    handlerId: z.string().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional()
  })).default([]).optional()
});
