import React from 'react';
import { PhoneOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { openSideCart } from '../../redux/slice/cartSlice';
import { Col, Row } from 'antd';

const TopHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfor = JSON.parse(localStorage.getItem('USER'));
    const totalAmount = JSON.parse(localStorage.getItem('TOTAL_AMOUNT'));
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <Row className='bg-gray-200 flex justify-between py-1 px-14'>
            <Col className='flex items-center'>
                <PhoneOutlined />
                <p className='font-semibold text-xs ml-1'>032.555.98.18</p>
            </Col>
            <Col className='flex space-x-10'>
                {userInfor ? (
                    <>
                        <Link to='profile' className='flex items-center space-x-1'>
                            <UserOutlined />
                            <p>{userInfor?.username}</p>
                        </Link>
                        <Link> 
                            <button onClick={handleLogout}>Logout</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to='login' className='flex items-center space-x-1' >
                            <UserOutlined />
                            <p>Tài khoản</p>
                        </Link>
                    </>
                )}
                <Link className='flex items-center space-x-1' onClick={() => dispatch(openSideCart(!null))}>
                    <ShoppingCartOutlined />
                    <p>Giỏ hàng <span className='text-red-600'>( {totalAmount} )</span></p>
                </Link>
            </Col>
        </Row>
    );
};

export default TopHeader;