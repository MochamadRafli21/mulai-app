import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from 'next/server';

import { OrderSchema } from "@/libs/zod/schema";
import { createOrder, getOrderList } from "@/libs/prisma/order";
import { validateToken } from "@/libs/auth/validate";

export async function GET(request: NextRequest, context: { params: { page: string, pageSize: string } }) {
  const token = request.headers.get('Authorization')
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    validateToken(token)
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const page = Number(context.params.page)
  const pageSize = Number(context.params.pageSize)
  const order = await getOrderList({ page, pageSize })
  return NextResponse.json({ data: order });
}

export async function POST(request: NextRequest) {
  const res = await request.json()
  try {
    const parsedPayload = OrderSchema.parse(res)
    const order = await createOrder(parsedPayload)
    revalidatePath('/order')
    return NextResponse.json({ data: order });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}


