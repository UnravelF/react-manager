import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button, Layout, Menu, message, theme, Watermark } from 'antd';
const { Sider, Content } = Layout;

import styles from './index.module.less';
import NavHeader from '@/components/Nav-header';
import NavFooter from '@/components/Nav-footer';
import SideMenu from '@/components/menu';
import { getUserInfo } from '@/api/index';
import store from '@/store';

const App: React.FC = () => {
  const fetchUserInfo = async () => {
    try {
      const data = await getUserInfo();
      store.updateUserInfo(data)
    } catch (e) {
      message.error('获取用户信息失败');
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Watermark content='hgf-ReactManager'>
      <Layout>
        <Sider>
          <SideMenu />
        </Sider>
        <Layout>
          <NavHeader />
          <Content className={styles.content}>
            <div className='wrapper'>
              <Outlet />
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
