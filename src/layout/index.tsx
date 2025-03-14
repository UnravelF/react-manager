/*
 * @Author: huanggaofeng hgfhgf1225@163.com
 * @Date: 2024-11-03 21:15:01
 * @LastEditors: huanggaofeng hgfhgf1225@163.com
 * @LastEditTime: 2025-03-14 22:50:51
 * @FilePath: /react-manager/src/layout/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Outlet } from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
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
      store.updateUserInfo(data);
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
              <Suspense fallback='Loading'>
                <Outlet />
              </Suspense>
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
