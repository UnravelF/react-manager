import { LoginUserInfo } from '@/types/api';
import resso from 'resso';

const store = resso({
  token: '',
  userInfo: {} as LoginUserInfo.UserInfoProps,
  updateToken(token: string) {
    store.token = token;
  },
  updateUserInfo(userInfo: LoginUserInfo.UserInfoProps) {
    store.userInfo = userInfo;
  }
});

export default store;
