import axiosInterceptorInstance from "@/libs/axios";
import { useMutation, useQuery } from 'react-query';
import { revalidatePath } from "next/cache";
import { parserServicePayload } from '@/libs/types/service';

export function useService() {
  return useMutation(
    (payload: parserServicePayload) => axiosInterceptorInstance.post('/api/service', payload),
    {
      onSuccess: () => {
        revalidatePath('/api/service')
        useQuery('services', () => axiosInterceptorInstance.get('/api/service'))
      }
    }
  )
}
