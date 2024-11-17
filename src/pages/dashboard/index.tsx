import React, { memo, useEffect, useState } from 'react';
import { Button, Card, Descriptions, DescriptionsProps, message } from 'antd';

import styles from './index.module.less';
import store from '@/store';
import { useUserRole } from '@/hook/use-user-role';
import { UserStatusEnum } from '@/types/common';
import { getReportData, getLineData, getPieData, getRadarData } from '@/api';
import { DashboardPorps } from '@/types/api';
import { useChart } from '@/hook/use-charts';

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
  const [lineRef, lineChartInstance] = useChart();
  const [pieCityRef, pieChartCityInstance] = useChart();
  const [pieAgeRef, pieChartAgeInstance] = useChart();
  const [radarRef, radarChartInstance] = useChart();

  const initLineData = async () => {
    const res = await getLineData();
    lineChartInstance?.setOption({
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
        data: res.label
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '月文章数',
          type: 'line',
          data: res.articleCount
        },
        {
          name: '月访问量',
          type: 'line',
          data: res.visitsCount
        }
      ]
    });
  };
  const initPieData = async () => {
    const res = await getPieData();
    pieChartCityInstance?.setOption({
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
          data: res.cityData,
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
    pieChartAgeInstance?.setOption({
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
          data: res.ageData,
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
  };
  const initRadarData = async () => {
    const res = await getRadarData();
    console.log('res+++++', res);
    radarChartInstance?.setOption({
      legend: {
        data: ['各个框架']
      },
      radar: {
        indicator: res.indicator
      },
      series: [
        {
          name: '各个框架',
          type: 'radar',
          data: res.seriesValue,
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
  };

  useEffect(() => {
    initLineData();
    initPieData();
    initRadarData();
  }, [initLineData, initPieData, initRadarData ]);

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
            (item: DashboardPorps.FrameItem, index: number) => {
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
        >
          <div ref={lineRef} className={styles.itemLine}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card
          title='社区技术占比及活跃度'
        >
          <div className={styles.pieChart}>
            <div ref={pieCityRef} className={styles.itemPie}></div>
            <div ref={pieAgeRef} className={styles.itemPie}></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='技术发展趋势'>
          <div ref={radarRef} className={styles.itemLine}></div>
        </Card>
      </div>
    </div>
  );
});

export default Dashboard;
