import { NextResponse } from 'next/server';

import { getOrderDetail } from "@/libs/prisma/order";

export async function GET(params: { id: string }) {
  const { id } = params
  const order = await getOrderDetail(id)
  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }
  return NextResponse.json({ data: order });
}
