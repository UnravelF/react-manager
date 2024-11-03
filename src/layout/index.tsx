import React, { useState } from 'react';
import { Button, Layout, Menu, theme, Watermark } from 'antd';
const { Header, Sider, Content } = Layout;

import NavHeader from '@/components/Nav-header';
import NavFooter from '@/components/Nav-footer';
import SideMenu from '@/components/menu';

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Watermark content='hgf-ReactManager'>
      <Layout>
        <Sider>
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <NavHeader />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            Content
          </Content>
          <NavFooter/>
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
