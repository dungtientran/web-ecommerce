import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios'
const Signup = () => {
    const navigate = useNavigate()
    const onFinish = async (e) => {
        const response = axios.post('auth/sign-up', e)
        try {
            alert('Đăng ký thành công')
            navigate('/login')
        } catch (error) {
            alert('Đăng ký thất bại')
        }
    }


    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 24,
                }}
                onFinish={onFinish}
                className='w-[30%] m-auto border border-black p-4'
            >
                <Typography.Title className='text-center'>Đăng Ký</Typography.Title>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    className='flex justify-center mt-10 '
                >
                    <Button type="primary" htmlType="submit" className='bg-black'>
                        Đăng Ký
                    </Button>
                    <Link to='/login' className='ml-6'> Đăng nhập </Link>
                </Form.Item>
            </Form>
        </>
    );
};

export default Signup;