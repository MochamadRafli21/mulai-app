export type createTaskPayload = {
  title: string,
  description: string,
  status: "pending" | "in_progress" | "on_check" | "done"
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
  tasks?: createTaskPayload[],
}

export type parserOrderPayload = {
  title?: string,
  description?: string,
  customer_name?: string,
  customer_email?: string,
  customer_phone?: string,
  discount?: number,
  total_price?: number,
  tasks?: createTaskPayload[],
}
