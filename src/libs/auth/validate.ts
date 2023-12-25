import argon2 from 'argon2'
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

export function validateToken(token: string) {
  token = token.replace('Bearer ', '')
  const secret = process.env.JWT_SECRET as Secret
  if (!token) {
    throw new Error('Unauthorized')
  }

  const decoded = jwt.verify(token, secret) as JwtPayload
  if (!decoded) {
    throw new Error('Unauthorized')
  }
  if (decoded.expiresAt < Date.now()) {
    throw new Error('Unauthorized')
  }

  return decoded
}

export async function validatePassword(hashedPassword: string, password: string) {
  const verified = await argon2.verify(hashedPassword, password)
  if (!verified) {
    throw new Error('Unauthorized')
  }
  return verified
}
