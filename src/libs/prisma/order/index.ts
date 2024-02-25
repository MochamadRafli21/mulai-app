import prisma from "@/libs/prisma/prismaClient";

import { createOrderPayload } from "@/libs/types/order";

export function getOrderList() {
  return prisma.order.findMany(
    {
      include: {
        task: true
      }
    }
  )
}

export function getOrderDetail(id: string) {
  return prisma.order.findFirst({
    where: {
      id: id
    }
  })
}

export function createOrder(payload: createOrderPayload) {
  return prisma.order.create({
    data: {
      ...payload,
      task: {
        createMany: {
          data: payload.task || []
        }
      }
    },
    include: {
      task: true
    }
  })
}
