import jwt, { Secret } from 'jsonwebtoken'

export function generateToken(email: string) {
  const secret = process.env.JWT_SECRET as Secret
  if (!secret) {
    throw new Error('JWT_SECRET must be set')
  }
  const expiresAt = Date.now() + 1000 * 60 * 60 * 24
  return {
    accessToken: jwt.sign({ email, expiresAt }, secret, { expiresIn: '1d' }),
    expiresAt
  }
}
