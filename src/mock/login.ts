import Mock from 'mockjs';
import env from '@/config';

Mock.mock(`${env.baseApi}/users/login`, 'post', {
  code: 0,
  data: 'e987d408-7888-4783-be9d-9ede8148ec33',
  msg: '登录成功'
})
