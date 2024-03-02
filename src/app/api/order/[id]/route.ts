import { NextRequest, NextResponse } from 'next/server';

import { getOrderDetail } from "@/libs/prisma/order";
import { validateToken } from "@/libs/auth/validate";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const token = request.headers.get('Authorization')
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    validateToken(token)
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const order = await getOrderDetail(id)
  return NextResponse.json({ data: order });
}
