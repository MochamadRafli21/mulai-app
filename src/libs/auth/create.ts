import jwt, { Secret } from 'jsonwebtoken'

export function generateToken(email: string) {
  const secret = process.env.JWT_SECRET as Secret
  if (!secret) {
    throw new Error('JWT_SECRET must be set')
  }
  return jwt.sign({ email }, secret, { expiresIn: '1d' })
}
