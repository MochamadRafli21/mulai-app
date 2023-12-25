import axiosInterceptorInstance from "@/libs/axios";
import { useQuery } from "react-query";

export function getOrders() {
  return useQuery('orders', () => axiosInterceptorInstance.get('/api/order'))
}
