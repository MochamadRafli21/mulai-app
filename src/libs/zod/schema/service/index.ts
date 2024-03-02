import { z } from "zod";
import { TaskStatus } from "@/libs/types";

const TaskStatusSchema = z.nativeEnum(TaskStatus);
export const ServiceSchema = z.object({
  name: z.string().nonempty('Name Field is Required'),
  description: z.string().nonempty('Description Field is required'),
  task: z.array(z.object({
    title: z.string(),
    description: z.string(),
    serviceId: z.string(),
    status: TaskStatusSchema,
    is_active: z.boolean().default(true),
    price: z.number(),
    handlerId: z.string().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional()
  })).default([]).optional()
});
