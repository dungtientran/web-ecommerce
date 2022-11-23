import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NaviSuv from '../components/naviSuv/NaviSuv';
import Service from '../components/UI/Deltails/Service';
import { loginCart } from '../redux/slice/cartSlice';
import { removeToCart, updateQuantityToCart } from '../apis';
import { CheckOutlined, LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [productId, setProductId] = useState();
    const [delproductId, setDelProductId] = useState();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        dispatch(loginCart());
    }, [dispatch]);

    const loginCar = useSelector(state => state.cart.listCart);
    const listCartProduct = new Array(...loginCar);
    if(!listCartProduct[0]?.productDetailId){

        listCartProduct.splice(0, 1);
    }
    const totalQuantity = listCartProduct?.map(item => item.quantity)?.reduce((total, item) => total + Number(item), 0);
    const totalPrice = listCartProduct?.map(item => Number(item.quantity) * Number(item.productDetailId.price)).reduce((total, item) => total + item, 0);

    const handleUpdateCart =  () => {
        updateQuantityToCart({
            productDetailId: productId,
            quantity: quantity
        })
        setTimeout(() => {
            dispatch(loginCart())
        }, 200);
        setQuantity(0)
    }

    const delEl = document.querySelectorAll('.deleteCart')
    const checkDelEl = document.querySelectorAll('.checkDelete')
    const cancelDel = document.querySelectorAll('.cancelDel')
    
    delEl?.forEach((item, index) => {
        item.addEventListener('click', () => {
            checkDelEl[index].style.display = 'flex';
            item.style.display = 'none';
        })
    })
    cancelDel?.forEach((item, index) => {
        item.addEventListener('click', () => {
            delEl[index].style.display = 'block';
            checkDelEl[index].style.display = 'none';
        })
    })
    const handleRemoveCart = async () => {
        removeToCart({
            productDetailId: delproductId
        })
        setTimeout(() => {
            dispatch(loginCart())
        }, 100);

    }
    return (
        <>
            <Divider />
            <NaviSuv nav={'Giỏ hàng'} />
            <div className='flex w-[70%] m-auto justify-between'>
                <div className='space-y-6 w-[70%]'>
                    <div>
                        <span className='uppercase text-xl font-bold mr-2'>Giỏ hàng của bạn</span>
                        <span>(Có <span className='font-bold text-red-500'>{totalQuantity}</span> sản phẩm trong giỏ hàng)</span>
                    </div>
                    <div className='px-10 '>
                        {listCartProduct?.map((item, index) => (
                            <div key={index} className='flex justify-between items-center border-t-2 px-1 py-2'>
                                <div className='w-[20%] py-1'>
                                    <img src={`https://shope-b3.thaihm.site/${item.productDetailId.listImg[0]}`} alt="Lỗi ảnh" className='w-full' />
                                </div>
                                <div className='w-[95%] space-y-2 flex justify-between items-center'>
                                    <div className='w-[70%] flex justify-between'>
                                        <div className='w-full'>
                                            <p className='font-thin pb-1 truncate w-[80%]'>{item.productDetailId.productId.productName}</p>
                                            <p className='text-xs italic font-bold'><span>Màu: </span> <span className='font-semibold ml-1'>{item.productDetailId.color}</span></p>
                                            <p className='text-xs italic font-bold'><span>Ram: </span> <span className='font-semibold ml-1'>{item.productDetailId.ram}</span></p>
                                            <p className='text-xs italic font-bold'><span>Rom: </span> <span className='font-semibold ml-1'>{item.productDetailId.rom}</span></p>
                                            <p className='text-xs italic font-bold'><span>Đơn giá: </span> <span className='font-semibold ml-1'>{item.productDetailId.price?.toLocaleString()} đ</span></p>
                                            <p className='text-xs italic font-bold'><span>Số lượng: </span> <span className='font-semibold ml-1'>{item.quantity} cái</span></p>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='flex flex-col justify-center space-y-2'>
                                                <p>Chọn lại số lượng</p>
                                                <div className='space-x-2 flex'>
                                                    <div className='flex'>
                                                        <div >
                                                            <input
                                                                type="text"
                                                                className='bg-gray-200 outline-none shadow-inner text-center w-[50%] py-1'
                                                                defaultValue={0}
                                                                onChange={(e) => (setQuantity(e.target.value), setProductId(item.productDetailId._id))} />
                                                        </div>
                                                        <button className='py-1 px-2 text-center bg-black text-white sendButton' onClick={handleUpdateCart}>Gửi</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[5%]'>
                                        <div>
                                            <button
                                                className='px-1 text-sm font-thin border bg-gray-50 deleteCart'
                                                onClick={() => {
                                                    setDelProductId(item.productDetailId._id)                                               
                                                }}

                                            >Xóa</button>
                                            <div className='checkDelete space-x-2 hidden'>
                                                 <button className='w-4 h-4 bg-black text-white flex items-center justify-center rounded-full p-2' onClick={handleRemoveCart}><CheckOutlined /></button>
                                                 <button className='w-4 h-4 bg-black text-white flex items-center justify-center rounded-full p-2 cancelDel'><LoginOutlined /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='space-y-6'>
                    <div className='bg-gray-200 p-4 space-y-6'>
                        <p className='uppercase font-bold text-lg'>Tóm tắt đơn hàng</p>
                        <p className='font-thin'>Chưa bao gồm phí vận chuyển</p>
                        <div className='flex justify-between font-bold border-b-[1px] border-dotted border-gray-400 pb-3'>
                            <p>Tổng tiền: </p>
                            <p>{totalPrice?.toLocaleString()} đ</p>
                        </div>
                        <p className='italic font-thin'>Bạn có thể nhậm mã giảm giá ở trang thanh toán</p>
                        <div className='space-y-2 flex flex-col text-center'>
                            <Link to='/checkout' className='w-full uppercase p-2 bg-black text-white'>Tiến hành đặt hàng</Link>
                            <Link to='/home' className='w-full uppercase p-2 bg-white text-black border border-black hover:bg-black hover:text-white'>Mua thêm sản phẩm</Link>
                        </div>
                    </div>
                    <Service />
                </div>
            </div>

        </>
    );
};

export default Cart;