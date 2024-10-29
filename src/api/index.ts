import request from "@/utils/request";
import { LoginRequest } from '@/types/api'

export const login = (params: LoginRequest.params) => {
  return request.post('/users//login', params);
}
