import React, { useEffect } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserInfor, userLogin } from '../redux/slice/authSlice';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const onFinish = (values) => {
        dispatch(userLogin(values))
        dispatch(getUserInfor())
    };
 
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
                <Typography.Title className='text-center'>Đăng nhập</Typography.Title>
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
                    className='flex justify-center mt-10'
                >
                    <Button type="primary" htmlType="submit" className='bg-black'>
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default Login;