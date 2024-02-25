
//  id             String   @id @default(cuid())
//  title          String?
//  description    String
//  customer_name  String
//  customer_phone String
//  customer_email String?
//  task           Task[]
//  discount       Int
//  total_price    Int
//  created_at     DateTime @default(now())
//  updated_at     DateTime @default(now())

export enum TaskStatus {
  pending = "pending",
  in_progress = "in_progress",
  on_check = "on_check",
  done = "done",
}

export type createTaskPayload = {
  title: string,
  description: string,
  status: "pending" | "in_progress" | "on_check" | "done",
  is_active: boolean,
  handlerId?: string,
  orderId?: string,
  price: number,
  serviceId?: string,
}

export type createOrderPayload = {
  title?: string,
  description: string,
  customer_name: string,
  customer_email?: string,
  customer_phone: string,
  discount: number,
  total_price: number,
  task?: createTaskPayload[],
}

export type parserOrderPayload = {
  title?: string,
  description?: string,
  customer_name?: string,
  customer_email?: string,
  customer_phone?: string,
  discount?: number,
  total_price?: number,
  task?: createTaskPayload[],
}



export type OrderList = {
  id: string
  title: string
  description: string
  customer_name: string
  customer_phone: string
  customer_email: string
  discount: number
  total_price: number
  created_at: Date
  updated_at: Date
}
