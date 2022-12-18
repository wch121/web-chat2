import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import "./less/Login.less"

const logo = require("assets/images/logo.png")

interface IRegisterLogin {
    username: string;
    password: string;
}

export default function Login() {
    const navigte = useNavigate()

    //点击登录
    const onFinish = (values: IRegisterLogin) => {
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login_box'>
            <img src={logo} className="logo" alt="" width={'100%'}/>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                size="large"
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='请输入用户名' />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder='请输入密码' />
                </Form.Item>

                <Form.Item>
                    <Link to="/register">还没账号？立即注册</Link>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" block size='large'>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}