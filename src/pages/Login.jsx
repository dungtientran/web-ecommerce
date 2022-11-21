
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserInfor, userLogin } from '../redux/slice/authSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();   
    const onFinish = async (values) => {
        const resultToken = await dispatch(userLogin(values))
        const tokenResult = unwrapResult(resultToken)
        if(tokenResult) {
            navigate('/')
        }
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