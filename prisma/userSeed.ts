import argon2 from 'argon2'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set')
  }
  const passwordHash = await argon2.hash(adminPassword)
  const user = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      fullname: 'admin',
      email: adminEmail,
      password: passwordHash,
      role: 'admin'
    }
  })

  console.log(`Created user with id: ${user.id}`)
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

