import request from "@/utils/request";
import { LoginRequest, LoginUserInfo, DashboardPorps} from '@/types/api'

export const login = (params: LoginRequest.params) => {
  return request.post<string>('/users/login', params);
}

export const getUserInfo = () => {
  return request.get<LoginUserInfo.UserInfoProps>('/users/getUserInfo')
}

export const getReportData = () => {
  return request.get<DashboardPorps.ReportData>('/workbench/report/dashboard')
}
