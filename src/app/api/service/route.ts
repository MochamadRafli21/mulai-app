import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from 'next/server';

import { ServiceSchema } from "@/libs/zod/schema";
import { createService, getServiceList } from "@/libs/prisma/service";
import { validateToken } from "@/libs/auth/validate";

export async function GET(request: NextRequest) {
  const token = request.headers.get('Authorization')
  const { searchParams } = new URL(request.url)
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    validateToken(token)
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const page = Number(searchParams.get('page') || 1)
    const pageSize = Number(searchParams.get('pageSize') || 10)
    const service = await getServiceList({ page, pageSize })
    return NextResponse.json({ data: service });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const token = request.headers.get('Authorization')
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    validateToken(token)
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const res = await request.json()
  try {
    const parsedPayload = ServiceSchema.parse(res)
    const service = await createService(parsedPayload)
    revalidatePath('/api/service')
    return NextResponse.json({ data: service });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}


