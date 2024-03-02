import prisma from "@/libs/prisma/prismaClient";

import { createOrderPayload } from "@/libs/types/order";

export function getOrderList({ page, pageSize }: { page: number, pageSize: number }) {
  return prisma.order.findMany(
    {
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: {
        is_active: true
      },
      include: {
        task: true
      }
    }
  )
}

export function getOrderDetail(id: string) {
  return prisma.order.findFirst({
    where: {
      id: id,
      is_active: true
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

export function updateOrder(payload: createOrderPayload, id: string) {
  return prisma.order.update({
    where: {
      id: id
    },
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

export function deleteOrder(id: string) {
  return prisma.order.update({
    where: {
      id: id
    },
    data: {
      is_active: false
    }
  })
}
