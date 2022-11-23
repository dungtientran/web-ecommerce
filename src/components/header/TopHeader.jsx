import React, { useEffect } from 'react';
import { PhoneOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loginCart, openSideCart } from '../../redux/slice/cartSlice';
import { Col, Row } from 'antd';

const TopHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfor = JSON.parse(localStorage.getItem('USER'));
    const token = localStorage.getItem('TOKEN')
    useEffect(() => {
        if(token){
            dispatch(loginCart());
        }
    }, [dispatch]);

    const loginCar = useSelector(state => state.cart.listCart);
    const listCartProduct = new Array(...loginCar);
    if(!listCartProduct[0]?.productDetailId){
        listCartProduct.splice(0, 1);
    }
    const totalQuantity = listCartProduct?.map(item => item.quantity)?.reduce((total, item) => total + Number(item), 0);

    const handleLogout = () => {
        localStorage.removeItem('TOKEN')
        localStorage.removeItem('USER')
        window.scroll(0,0)
        alert('Đăng xuất thành công')
    }
    const hadleOpenCart = () => {
        dispatch(openSideCart(!null));
        dispatch(loginCart())
    }
    return (
        <Row className='bg-gray-200 flex justify-between py-1 px-14'>
            <Col className='flex items-center'>
                <PhoneOutlined />
                <p className='font-semibold text-xs ml-1'>032.555.98.18</p>
            </Col>
            <Col className='flex space-x-10'>
                {token ? (
                    <div className='flex space-x-4'>
                        <Link to='profile' className='flex items-center space-x-1 lg:text-base md:text-sm sm:text-xs ' >
                            <UserOutlined />
                            <p>{userInfor?.username}</p>
                        </Link>
                        <Link to='/login' onClick={handleLogout}> 
                           Logout
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to='login' className='flex items-center space-x-1  lg:text-base md:text-sm sm:text-xs' >
                            <UserOutlined />
                            <p>Tài khoản</p>
                        </Link>
                    </>
                )}
                <Link className='flex items-center space-x-1 lg:text-base md:text-sm sm:text-xs' onClick={hadleOpenCart}>
                    <ShoppingCartOutlined />
                    <p>Giỏ hàng <span className='text-red-600'>( {totalQuantity} )</span></p>
                </Link>
            </Col>
        </Row>
    );
};

export default TopHeader;