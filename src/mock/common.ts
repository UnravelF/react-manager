import Mock from 'mockjs';
import env from '@/config';

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
