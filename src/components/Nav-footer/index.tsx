import { memo } from 'react';

import styles from './index.module.less';

const NavFooter = memo(() => {
  return (
    <div className={styles.navFooter}>
      <div>
        <a href='#'>React+Ts+vite+antd</a>
        <span className='gutter'>|</span>
        <a href='#'>通用后台管理系统</a>
      </div>
    </div>
  );
});

export default NavFooter;
