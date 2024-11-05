import React, { memo } from 'react';
import { Descriptions, DescriptionsProps } from 'antd';

import styles from './index.module.less';
import store from '@/store';
import { useUserRole } from '@/hook/use-usr-role';
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
    </div>
  );
});

export default Dashboard;
