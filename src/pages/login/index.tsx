import { memo, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import style from './index.module.less';
import { login } from '@/api';
import { LoginRequest } from '@/types/api';
import storage from '@/utils/storage';
import store from '@/store';

type FieldType = {
  userName: string;
  userPwd: string;
};

const Login = memo(() => {
  const [loading, setLoading] = useState(false);
  const onFinish = async (value: LoginRequest.params) => {
    try {
      setLoading(true);
      const res = await login(value);
      setLoading(false);
      storage.set('token', res);
      store.token = res;
      message.success('登录成功！');
      const params = new URLSearchParams(location.search);
      location.href = params.get('callback') || '/welcome';
    } catch(err) {
      message.error('登录失败')
      setLoading(false);

    }
  };
  const onFinishFailed = () => {
    message.error('登录失败！');
  };

  return (
    <div className={style.login}>
      <div className={style.loginWrapper}>
        <div className={style.title}>Login</div>
        <Form
          name='basic'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            name='userName'
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            name='userPwd'
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type='primary' block htmlType='submit' loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
});

export default Login;
