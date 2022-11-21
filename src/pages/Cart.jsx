import { Divider } from 'antd';
import React, { useState } from 'react';
import NaviSuv from '../components/naviSuv/NaviSuv';
import Service from '../components/UI/Deltails/Service'
const Cart = () => {
    const listCart = JSON.parse(localStorage.getItem('LIST_CART'));
    const totalPrice = JSON.parse(localStorage.getItem('TOLTAL_PRICE'));
    const totalAmount = JSON.parse(localStorage.getItem('TOTAL_AMOUNT'));

    return (
        <>  
            <Divider/>
            <NaviSuv nav={'Giỏ hàng'} />
            <div className='flex w-[70%] m-auto justify-between'>
                <div className='space-y-6'>
                    <div>
                        <span className='uppercase text-xl font-bold mr-2'>Giỏ hàng của bạn</span>
                        <span>(Có <span className='font-bold text-red-500'>{totalAmount}</span> sản phẩm trong giỏ hàng)</span>
                    </div>
                    <div className='px-10 '>
                        {listCart.map((item, index) => (
                            <div key={index} className='flex justify-between items-center border-t-2 px-1 py-2'>
                                <div className='w-[16%] py-1'>
                                    <img src={`https://shope-b3.thaihm.site/${item.thumbnail}`} alt="cart" className='w-full' />
                                </div>
                                <div className='w-[75%] space-y-2 flex justify-between items-center'>
                                    <div>
                                        <p className='font-thin pb-1'>{item.name}</p>
                                        <p className='text-xs italic'><span>Màu: </span> <span className='font-semibold'>{item.color}</span></p>
                                        <p className='text-xs italic'><span>Ram: </span> <span className='font-semibold'>{item.ram}</span></p>
                                        <p className='text-xs italic'><span>Rom: </span> <span className='font-semibold'>{item.rom}</span></p>
                                        <p className='text-xs italic'><span>Đơn giá: </span> <span className='font-semibold'>{item.price?.toLocaleString()} đ</span></p>
                                        <p className='text-xs italic'><span>Số lượng: </span> <span className='font-semibold'>{item.amountBuy}</span></p>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <button className=' font-bold w-4 '>-</button>
                                        <input type="text" className='bg-gray-200 outline-none w-10 text-center' value={1} />
                                        <button className=' font-bold w-4 '>+</button>
                                    </div>
                                    <div className='font-bold'>
                                        
                                    </div>
                                    <div>
                                        <button className='px-1 text-sm font-thin border bg-gray-50'>Xóa</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='space-y-6'>
                    <div className='bg-gray-200 p-4 space-y-6'>
                        <p className='uppercase font-bold'>Tóm tắt đơn hàng</p>
                        <p className='font-thin'>Chưa bao gồm phí vận chuyển</p>
                        <div className='flex justify-between font-bold border-b-[1px] border-dotted border-gray-400 pb-3'>
                            <p>Tổng tiền: </p>
                            <p>{totalPrice?.toLocaleString()} đ</p>
                        </div>
                        <p className='italic font-thin'>Bạn có thể nhậm mã giảm giá ở trang thanh toán</p>
                        <div className='space-y-2'>
                            <button className='w-full uppercase p-2 bg-black text-white'>Tiến hành đặt hàng</button>
                            <button className='w-full uppercase p-2 bg-white text-black border border-black hover:bg-black hover:text-white'>Mua thêm sản phẩm</button>
                        </div>
                    </div>
                    <Service />
                </div>
            </div>

        </>
    );
};

export default Cart;