import axiosInterceptorInstance from "@/libs/axios";
import { useMutation, useQuery } from 'react-query';
import { revalidatePath } from "next/cache";
import { parserServicePayload } from '@/libs/types/service';

export function editService() {
  return useMutation(
    (data: {
      id: string,
      payload: parserServicePayload
    }
    ) => axiosInterceptorInstance.patch('/api/service/' + data.id, data.payload),
    {
      onSuccess: () => {
        revalidatePath('/api/service')
        useQuery('services', () => axiosInterceptorInstance.get('/api/service'))
      }
    }
  )
}
