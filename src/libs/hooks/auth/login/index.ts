import axios from 'axios';
import { useMutation } from 'react-query';

import { LoginParserPayload } from '@/libs/types/auth';

export function useLogin(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
  return useMutation({
    mutationFn: (data: LoginParserPayload) => axios.post('/api/auth/create', data),
    onSuccess,
    onError
  })
}
