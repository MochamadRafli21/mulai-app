import axios from 'axios';
import { useQuery } from 'react-query';

import { parserOrderPayload } from '@/libs/types/order';

export function createOrder(payload: parserOrderPayload) {
  return useQuery({
    queryKey: ['createOrder', payload],
    queryFn: () => axios.post('/api/order', payload),
    enabled: false
  })
}
