import {
  Button,
  Col,
  Form,
  FormProps,
  Input,
  Row,
  Space,
  Table,
  TableProps
} from 'antd';
import React, { memo, useEffect, useState } from 'react';

import { LoginUserInfo, SearchParams } from '@/types/api';
import styles from './index.module.less';
import { getUserList } from '@/api';

const UserList: React.FC = memo(function UserList(props) {
  const [userList, setUserList] = useState<LoginUserInfo.UserInfoProps[]>([]);

  useEffect(() => {
    getUserList().then(res => {
      setUserList(res);
    });
  }, []);

  const onFinish: FormProps<SearchParams>['onFinish'] = values => {
    console.log('Success:', values);
  };


  const columns: TableProps<LoginUserInfo.UserInfoProps>['columns'] = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id'
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: '部门',
      key: 'deptName',
      dataIndex: 'deptName'
    },
    {
      title: '角色',
      key: 'roleList',
      dataIndex: 'roleList'
    },
    {
      title: '邮箱',
      key: 'userEmail',
      dataIndex: 'userEmail'
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: (_, record) => (
        <Space size={'middle'}>
          <Button type='link'>编辑</Button>
          <Button variant='text' color='danger'>
            删除
          </Button>
        </Space>
      )
    }
  ];

  return (
    <>
      <div className={styles.baseForm}>
        <Form
          name='user-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item<SearchParams> label='用户名' name='username'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item<SearchParams> label='角色' name='roleId'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <div style={{ textAlign: 'right' }}>
            <Space size='small'>
              <Button type='primary' htmlType='submit'>
                查询
              </Button>
              <Button>清空</Button>
            </Space>
          </div>
        </Form>
      </div>
      <div className={styles.baseTable}>
        <div className={styles.headerWrapper}>
          <div className={styles.title}>用户列表</div>
          <div className='action'>
            <Button type='primary'>新增</Button>
          </div>
        </div>
        <Table columns={columns} dataSource={userList}></Table>
      </div>
    </>
  );
});

export default UserList;
