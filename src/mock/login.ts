import Mock from 'mockjs';
import env from '@/config';

Mock.mock(`${env.baseApi}/users/login`, 'post', {
  code: 0,
  data: 'e987d408-7888-4783-be9d-9ede8148ec33',
  msg: '登录成功'
})

Mock.mock(`${env.baseApi}/users/getUserInfo`, {
  code: 0,
  data: {
    createId: 0,
    userName: 'curryHuang',
    deptId: 'admin-1',
    deptName: '管理部',
    role: 1,
    roleList: 'admin',
    state: 1,
    userEmail: 'hgfhgf1225@163.com',
    userId: 100001,
    key: '1',
    _id: '5e81c0462739d9001a000001'
  },
  msg: '获取用户信息成功'
})
