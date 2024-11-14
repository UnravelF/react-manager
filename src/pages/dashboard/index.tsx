import React, { memo, useEffect, useState } from 'react';
import { Button, Card, Descriptions, DescriptionsProps, message } from 'antd';
import * as echarts from 'echarts';

import styles from './index.module.less';
import store from '@/store';
import { useUserRole } from '@/hook/use-user-role';
import { UserStatusEnum } from '@/types/common';
import { getReportData } from '@/api';
import { DashboardPorps } from '@/types/api';

const Dashboard: React.FC = memo(() => {
  const { userInfo } = store;
  const { roleName, isAdmin } = useUserRole(userInfo.roleList);
  const [messageApi, contextHolder] = message.useMessage();
  const [reportData, setReportData] = useState<DashboardPorps.ReportData>(
    {} as DashboardPorps.ReportData
  );
  useEffect(() => {
    getReportData()
      .then((res: DashboardPorps.ReportData) => {
        setReportData(res);
      })
      .catch(err => {
        messageApi.error('获取数据失败', err);
      });
  }, []);
  console.log('reportData+++++', reportData);

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
    const pieChartCityDom = document.getElementById('pieChartCity');
    const pieChartCityInstance = echarts.init(pieChartCityDom as HTMLElement);
    const pieChartAgeDom = document.getElementById('pieChartAge');
    const pieChartAgeInstance = echarts.init(pieChartAgeDom as HTMLElement);
    const radarChartDom = document.getElementById('radarChart');
    const radarChartInstance = echarts.init(radarChartDom as HTMLElement);

    lineChartInstance.setOption({
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

    pieChartCityInstance.setOption({
      title: {
        text: '各技术栈占比',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '各技术栈占比',
          type: 'pie',
          radius: [50, 180],
          roseType: 'area',
          data: [
            { value: 50.6, name: 'Vue' },
            { value: 30.4, name: 'React' },
            { value: 15.4, name: 'Angular' },
            { value: 2.1, name: 'JQuery' },
            { value: 0.5, name: 'Php' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
    pieChartAgeInstance.setOption({
      title: {
        text: '技术社区讨论活跃度',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '技术社区讨论活跃度',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Vue' },
            { value: 735, name: 'React' },
            { value: 580, name: 'Angular' },
            { value: 484, name: 'JQuery' },
            { value: 300, name: 'Php' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });

    radarChartInstance.setOption({
      legend: {
        data: ['各个框架']
      },
      radar: {
        indicator: [
          { name: 'Vue', max: 6000 },
          { name: 'React', max: 3500 },
          { name: 'Angular', max: 200 },
          { name: 'JQuery', max: 50 },
          { name: 'Php', max: 5 }
        ]
      },
      series: [
        {
          name: '各个框架',
          type: 'radar',
          data: [{ value: [3000, 1512, 145, 34, 4], name: '各个技术站' }],
          symbol: 'none',
          itemStyle: {
            color: '#F9713C'
          },
          areaStyle: {
            opacity: 0.1
          }
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
        {reportData &&
          reportData?.frameData?.map(
            (item: DashboardPorps.frameItem, index: number) => {
              return (
                <div key={index} className={styles.card}>
                  <div className='title'>{item.frameName}</div>
                  <div className={styles.data}>{item.frameMessage}</div>
                </div>
              );
            }
          )}
      </div>
      <div className={styles.chart}>
        <Card
          title='月发表文章数及访问量'
          extra={<Button type='primary'>刷新</Button>}
        >
          <div id='lineChart' className={styles.itemLine}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card
          title='社区技术占比及活跃度'
          extra={<Button type='primary'>刷新</Button>}
        >
          <div className={styles.pieChart}>
            <div id='pieChartCity' className={styles.itemPie}></div>
            <div id='pieChartAge' className={styles.itemPie}></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='技术发展趋势' extra={<Button type='primary'>刷新</Button>}>
          <div id='radarChart' className={styles.itemLine}></div>
        </Card>
      </div>
    </div>
  );
});

export default Dashboard;
