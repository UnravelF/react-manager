import request from "@/utils/request";
import { LoginRequest, LoginUserInfo } from '@/types/api'

export const login = (params: LoginRequest.params) => {
  return request.post<string>('/users/login', params);
}

export const getUserInfo = () => {
  return request.get<LoginUserInfo.UserInfoProps>('/users/getUserInfo')
}
