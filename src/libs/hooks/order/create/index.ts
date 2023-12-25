import axios from 'axios';
import { useMutation } from 'react-query';

import { parserOrderPayload } from '@/libs/types/order';

export function useOrder() {
  return useMutation((payload: parserOrderPayload) => axios.post('/api/order', payload))
}
