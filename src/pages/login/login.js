import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Card} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less';
//挂载 Mock
import axios from 'axios';
// import '/mock/index'
export default class Login extends Component {
  render() {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      // axios.get('/login', {
      //     params:{
      //         id : '123'
      //     }
      // })
      // .then((res)=>{
      //     console.log(res.data)
      // })
      // .catch((err)=>{
      //     console.log(err)
      // })
    };
    return (
      <div className="login">
        <Card style={{ width: 300 }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
