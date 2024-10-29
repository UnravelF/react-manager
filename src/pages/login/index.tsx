import { memo } from 'react';
import style from './index.module.less';
import { Button, Form, Input } from 'antd';

type FieldType = {
  username: string;
  password: string;
};

const Login = memo(() => {
  const onFinish = () => {
    console.log('onFinish');
  };
  const onFinishFailed = () => {
    console.log('onFinishFailed');
  };

  return (
    <div className={style.login}>
      <div className={style.loginWrapper}>
        <div className={style.title}>Login</div>
        <Form name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
          <Form.Item<FieldType> name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType> name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type='primary' block htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
});

export default Login;
