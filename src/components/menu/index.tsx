import React, { memo } from 'react';
import { Button, Menu, MenuProps } from 'antd';
import {
  DesktopOutlined,
  SettingOutlined,
  TeamOutlined
} from '@ant-design/icons';

import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';

const SideMenu = memo(() => {
  type MenuItem = Required<MenuProps>['items'][number];
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      key: '1',
      label: '工作台',
      icon: <DesktopOutlined />
    },
    {
      key: '2',
      label: '系统管理',
      icon: <SettingOutlined />,
      children: [
        {
          key: '3',
          label: '用户管理',
          icon: <TeamOutlined />
        }
      ]
    }
  ];

  const handleClickLogo = () => {
    navigate('/welcome');
  };

  return (
    <div>
      <div className={styles.logo} onClick={handleClickLogo}>
        <img src='/src/assets/images/login_bg.jpg' alt='' />
        <span>React后台管理</span>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        mode='inline'
        theme='dark'
        items={items}
      />
    </div>
  );
});

export default SideMenu;
