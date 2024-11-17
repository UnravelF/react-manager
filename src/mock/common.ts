import Mock from 'mockjs';
import env from '@/config';
import { LoginUserInfo } from '@/types/api';

Mock.mock(`${env.baseApi}/workbench/report/dashboard`, {
  code: 0,
  data: {
    frameData: [
      {
        frameName: 'React',
        frameMessage: 'The library for web and native user interfaces'
      },
      {
        frameName: 'TypeScript',
        frameMessage:
          'TypeScript is a superset of JavaScript that compiles to clean JavaScript output'
      },
      {
        frameName: 'Vite',
        frameMessage:
          'Vite is a blazing fast frontend build tool powering the next generation of web applications'
      },
      {
        frameName: 'Antd',
        frameMessage: 'Ant Design of React'
      }
    ]
  }
});

Mock.mock(`${env.baseApi}/workbench/dashboard/lineData`, {
  code: 0,
  data: {
    label: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月'
    ],
    articleCount: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    visitsCount: [100, 220, 330, 440, 550, 660, 770, 880, 990, 150, 350, 120]
  }
});

Mock.mock(`${env.baseApi}/workbench/dashboard/pieData`, {
  code: 0,
  data: {
    cityData: [
      { value: 50.6, name: 'Vue' },
      { value: 30.4, name: 'React' },
      { value: 15.4, name: 'Angular' },
      { value: 2.1, name: 'JQuery' },
      { value: 0.5, name: 'Php' }
    ],
    ageData: [
      { value: 1048, name: 'Vue' },
      { value: 735, name: 'React' },
      { value: 580, name: 'Angular' },
      { value: 484, name: 'JQuery' },
      { value: 300, name: 'Php' }
    ]
  }
});

Mock.mock(`${env.baseApi}/workbench/dashboard/radarData`, {
  code: 0,
  data: {
    indicator: [
      { name: 'Vue', max: 6000 },
      { name: 'React', max: 3500 },
      { name: 'Angular', max: 200 },
      { name: 'JQuery', max: 50 },
      { name: 'Php', max: 5 }
    ],
    seriesValue: [{ value: [3000, 1512, 145, 34, 4], name: '各个技术站' }]
  }
});

// 模拟用户列表
const userList = [];
for (let i = 0; i < 50; i++) {
  const newObject: LoginUserInfo.UserInfoProps = {
    createId: 10000 + i + 1,
    userName: Mock.Random.cname(),
    deptId: 'admin-1',
    deptName: '管理部',
    role: Mock.Random.natural(1, 2),
    roleList: 'admin',
    state: 1,
    userEmail: 'hgfhgf1225@163.com',
    userId: 100001,
    key: Mock.Random.natural(1, 1000),
    _id: String(i + 1),
    createTime: Mock.Random.datetime()
  };
  userList.push(newObject)
}
Mock.mock(`${env.baseApi}/workbench/system/userList`, {
  code: 0,
  data: userList
});
