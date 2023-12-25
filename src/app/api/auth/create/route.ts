import { NextRequest, NextResponse } from 'next/server';

import { validatePassword, generateToken } from "@/libs/auth";
import { getUserByEmail } from "@/libs/prisma/user"
import { loginParser } from '@/libs/parser/auth/login';


export async function POST(request: NextRequest) {
  const res = await request.json()
  try {
    const parsedPayload = loginParser(res)
    const user = await getUserByEmail(parsedPayload.email)
    if (!user) {
      throw new Error('User not found')
    }
    try {
      await validatePassword(user.password, parsedPayload.password)
      const token = generateToken(user.email)
      return NextResponse.json({ data: token }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: error || 'Unauthorized, Please Check your email and password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: error || 'Unauthorized, Please Check your email and password' }, { status: 401 });
  }
}
