import { memo } from 'react';
import { MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Dropdown, MenuProps, Switch } from 'antd';

import style from './index.module.less';

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
      key: '1',
      label: '邮箱：hgfhgf1225@163.com'
    },
    {
      key: '2',
      label: '退出'
    }
  ];

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
        <Dropdown menu={{ items }} trigger={['click']}>
          <span className={style.nickName}>hgf</span>
        </Dropdown>
      </div>
    </div>
  );
});

export default NavHeader;
