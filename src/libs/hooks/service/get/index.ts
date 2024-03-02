import axiosInterceptorInstance from "@/libs/axios";
import { useQuery } from "react-query";

export function getServices(query: string = '') {
  return useQuery('services', () => axiosInterceptorInstance.get('/api/service' + query))
}

export function getServicesDetail(id: string) {
  return useQuery('services', () => axiosInterceptorInstance.get('/api/service/' + id))
}
