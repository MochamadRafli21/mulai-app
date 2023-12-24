import argon2 from 'argon2'
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

export function validateToken(token: string) {
  const secret = process.env.JWT_SECRET as Secret
  if (!token) {
    throw new Error('Unauthorized')
  }

  const decoded = jwt.verify(token, secret) as JwtPayload
  if (!decoded) {
    throw new Error('Unauthorized')
  }

  return decoded
}

export function validatePassword(hashedPassword: string, password: string) {
  return argon2.verify(hashedPassword, password)
}
