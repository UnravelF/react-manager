import { LoginUserInfo } from "@/types/api";
import resso from "resso";

const store = resso({
  token: '',
  userInfo: {} as LoginUserInfo.UserInfoProps,
  updateUserInfo(userInfo: LoginUserInfo.UserInfoProps) {
    store.userInfo = userInfo;
  }
})

export default store;
