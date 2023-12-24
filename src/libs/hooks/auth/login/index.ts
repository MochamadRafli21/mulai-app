import axios from 'axios';
import { useMutation } from 'react-query';

import { LoginParserPayload } from '@/libs/types/auth';

export function useLogin() {
  return useMutation((payload: LoginParserPayload) => axios.post('/api/auth/create', payload))
}
