import axiosInterceptorInstance from "@/libs/axios";
import { revalidatePath } from "next/cache";
import { useMutation, useQuery } from 'react-query';

export function deleteService() {
  return useMutation(
    (id: string) => axiosInterceptorInstance.delete('/api/service/' + id),
    {
      onSuccess: () => {
        revalidatePath('/api/service')
        useQuery('services', () => axiosInterceptorInstance.get('/api/service'))
      }
    }
  )
}
