import prisma from "@/libs/prisma/prismaClient";

import { createServicePayload } from "@/libs/types";

export function getServiceList({ page, pageSize }: { page: number, pageSize: number }) {
  if (!page || !pageSize) {
    page = 1
    pageSize = 10
  }
  return prisma.service.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    where: {
      is_active: true
    }
  })
}

export function getServiceDetail(id: string) {
  return prisma.service.findFirst({
    where: {
      id: id,
      is_active: true
    },
    include: {
      tasks: true
    }
  })
}

export function createService(payload: createServicePayload) {
  return prisma.service.create({
    data: {
      ...payload,
    }
  })
}

export function updateService(payload: createServicePayload, id: string) {
  console.log(id)
  return prisma.service.update({
    where: {
      id: id,
      is_active: true
    },
    data: {
      ...payload,
    }
  })
}

export function deleteService(id: string) {
  return prisma.service.update({
    where: {
      id: id
    },
    data: {
      is_active: false
    }
  })
}
