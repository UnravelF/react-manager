import { memo } from 'react';
import styles from './index.module.less';

const Welcome = memo(() => {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles.subTitle}>欢迎体验</div>
        <div className={styles.title}>React18 通用后台管理系统</div>
        <div className={styles.desc}>
          React18+ReactRouter6.0+AntD5.4+TypeScript5.0+Vite 实现通用后台管理系统
        </div>
      </div>
    </div>
  );
});

export default Welcome;
