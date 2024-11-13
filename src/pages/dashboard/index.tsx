import React, { memo, useEffect } from 'react';
import { Button, Card, Descriptions, DescriptionsProps } from 'antd';
import * as echarts from 'echarts';

import styles from './index.module.less';
import store from '@/store';
import { useUserRole } from '@/hook/use-user-role';
import { UserStatusEnum } from '@/types/common';

const Dashboard: React.FC = memo(() => {
  const { userInfo } = store;
  const { roleName, isAdmin } = useUserRole(userInfo.roleList);

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '用户名',
      children: userInfo.userName
    },
    {
      key: '2',
      label: '邮箱',
      children: userInfo.userEmail
    },
    {
      key: '3',
      label: '状态',
      children: userInfo.state === UserStatusEnum.ACTIVE ? '活跃' : '停用'
    },
    {
      key: '4',
      label: '角色',
      children: roleName
    },
    {
      key: '5',
      label: '岗位',
      children: userInfo.deptName
    }
  ];

  useEffect(() => {
    const lineChartDom = document.getElementById('lineChart');
    const lineChartInstance = echarts.init(lineChartDom as HTMLElement);
    lineChartInstance.setOption({
      title: {
        text: '月发表文章数及访问量'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['月文章数', '月访问量']
      },
      grid: {
        left: 50,
        right: 50,
        bottom: 50
      },
      xAxis: {
        data: [
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
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '月文章数',
          type: 'line',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
        },
        {
          name: '月访问量',
          type: 'line',
          data: [100, 220, 330, 440, 550, 660, 770, 880, 990, 150, 350, 120]
        }
      ]
    });
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img
          src='/src/assets/images/login_bg.jpg'
          alt=''
          className={styles.userImg}
        />
        <Descriptions title='Welcome To Space For React!' items={items} />
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className='title'>React</div>
          <div className={styles.data}>
            The library for web and native user interfaces
          </div>
        </div>
        <div className={styles.card}>
          <div className='title'>TypeScript</div>
          <div className={styles.data}>
            TypeScript is a superset of JavaScript that compiles to clean
            JavaScript output
          </div>
        </div>
        <div className={styles.card}>
          <div className='title'>Vite</div>
          <div className={styles.data}>
            Vite is a blazing fast frontend build tool powering the next
            generation of web applications
          </div>
        </div>
        <div className={styles.card}>
          <div className='title'>Antd</div>
          <div className={styles.data}>Ant Design of React</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card
          title='订单和流水走势图'
          extra={<Button type='primary'>刷新</Button>}
        >
          <div id='lineChart' className={styles.itemLine}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='司机分布' extra={<Button type='primary'>刷新</Button>}>
          <div id='pieChartCity' className={styles.itemLine}></div>
          <div id='pieChartAge' className={styles.itemLine}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='模型诊断' extra={<Button type='primary'>刷新</Button>}>
          <div id='radarChart' className={styles.itemLine}></div>
        </Card>
      </div>
    </div>
  );
});

export default Dashboard;
