import { memo } from 'react';
import { MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Dropdown, MenuProps, Switch } from 'antd';

import style from './index.module.less';
import store from '@/store';
import storage from '@/utils/storage';

const NavHeader = memo(() => {
  const breadList = [
    {
      title: '首页'
    },
    {
      title: '控制台'
    }
  ];
  const items: MenuProps['items'] = [
    {
      key: 'email',
      label: store.userInfo.userEmail
    },
    {
      key: 'logout',
      label: '退出'
    }
  ];
  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log(key);
    if (key === 'logout') {
      storage.remove('token');
      location.href = '/login?callback=' + encodeURIComponent(location.href);
    }
  };

  return (
    <div className={style.navHeader}>
      <div className={style.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{ marginLeft: 10 }} />
      </div>
      <div className='right'>
        <Switch
          checkedChildren='dark'
          unCheckedChildren='light'
          style={{ marginRight: 10 }}
        />
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={style.nickName}>{store.userInfo.userName}</span>
        </Dropdown>
      </div>
    </div>
  );
});

export default NavHeader;
