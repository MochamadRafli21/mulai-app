import { NextRequest, NextResponse } from 'next/server';

import { getServiceDetail, updateService, deleteService } from "@/libs/prisma/service";
import { validateToken } from "@/libs/auth/validate";
import { ServiceSchema } from "@/libs/zod/schema";

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

  const service = await getServiceDetail(id)
  return NextResponse.json({ data: service });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
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

  try {
    await getServiceDetail(id)
  } catch (error) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }

  try {
    await deleteService(id)
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const token = request.headers.get('Authorization')
  const body = await request.json()
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    validateToken(token)
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await getServiceDetail(id)
  } catch (error) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }

  try {
    const parsedPayload = ServiceSchema.parse(body)
    try {
      console.log(id)
      const service = await updateService(parsedPayload, id)
      return NextResponse.json({ data: service });
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
  } catch (error) {
    NextResponse.json({ error: error }, { status: 400 });
  }
}
