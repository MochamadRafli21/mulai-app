export function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email
    }
  })
}


export function getAllUser() {
  return prisma.user.findMany({})
}
