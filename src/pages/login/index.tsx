import { memo } from 'react';
import { Button, Form, Input, message } from 'antd';

import style from './index.module.less';
import { login } from '@/api';
import { LoginRequest } from '@/types/api';
import storage from '@/utils/storage';

type FieldType = {
  userName: string;
  userPwd: string;
};

const Login = memo(() => {
  const onFinish = async (value: LoginRequest.params) => {
    const res = await login(value);
    storage.set('token', res)
    message.success('登录成功！')
    const params = new URLSearchParams(location.search)
    location.href = params.get('callback') || '/welcome';
  };
  const onFinishFailed = () => {
    console.log('onFinishFailed');
  };

  return (
    <div className={style.login}>
      <div className={style.loginWrapper}>
        <div className={style.title}>Login</div>
        <Form name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
          <Form.Item<FieldType> name='userName' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType> name='userPwd' rules={[{ required: true, message: 'Please input your password!' }]}>
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
