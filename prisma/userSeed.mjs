import dotenv from 'dotenv'
import * as argon2 from 'argon2'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  dotenv.config()
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set')
  }
  const hash = await argon2.hash(adminPassword)
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      fullname: 'admin',
      email: adminEmail,
      password: hash,
      role: 'admin'
    }
  })

  console.log(`Created user with id: ${admin.id}`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

