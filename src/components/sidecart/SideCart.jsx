import React from 'react';

import { ExportOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { openSideCart } from '../../redux/slice/openSlice';
import { useDispatch, useSelector } from 'react-redux';

const SideCart = () => {
    const isOpen = useSelector((state) => state.open.openSideCart);
    const listCartStore = useSelector((state) => state.open.cartItem);
    localStorage.setItem('LIST_CART', JSON.stringify(listCartStore));
    const listCart = JSON.parse(localStorage.getItem('LIST_CART'));
    const totalPrice = listCart?.map((item) => item.totalPrice).reduce((a, b) => {
        return a + b
    }, 0)
    const dispatch = useDispatch();
    const totalAmount = useSelector((state) => state.open.totalAmount);

    return (
        <>
            <div onClick={() => dispatch(openSideCart(null))} className={`w-full h-full bg-black-rgba fixed top-0 z-20 ${!isOpen ? 'hidden' : 'block'}`}></div>
            <div>
                <div className={`w-[24%] h-full top-0 right-0 fixed z-40 py-14 px-4 bg-white ${!isOpen ? 'translate-x-full' : 'translate-x-0'} ease-in-out duration-1000`}>
                    {/* header */}
                    <div className='flex justify-between '>
                        <div>
                            <p className='text-xl font-semibold'>Giỏ hàng</p>
                            <p className='my-2'>Bạn đang có <span className='font-semibold text-red-500'> {totalAmount} </span> sản phẩm trong giỏ hàng</p>
                        </div>
                        <Link className='text-xl mr-2' onClick={() => dispatch(openSideCart(null))}>
                            <ExportOutlined />
                        </Link>
                    </div>
                    <div className='py-4'>
                        {(listCart?.length > 0) ? (
                            <div>
                                {listCart.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center border-t-2 px-1 py-2'>
                                        <div className='w-[16%]'>
                                            <img src={`https://shope-b3.thaihm.site/${item.thumbnail}`} alt="cart" className='w-full' />
                                        </div>
                                        <div className='w-[75%] space-y-2 flex justify-between items-center'>
                                            <div>
                                                <p className='font-thin'>{item.name}</p>
                                                <p className='text-xs italic'><span>Màu: </span> <span className='font-semibold'>{item.color}</span></p>
                                                <p className='text-xs italic'><span>Ram: </span> <span className='font-semibold'>{item.ram}</span></p>
                                                <p className='text-xs italic'><span>Rom: </span> <span className='font-semibold'>{item.rom}</span></p>
                                                <p className='text-xs italic'><span>Giá: </span> <span className='font-semibold'>{item.price.toLocaleString()}</span></p>
                                                <p className='text-xs italic'><span>Số lượng: </span> <span className='font-semibold'>{item.amountBuy}</span></p>
                                                
                                            </div>
                                            <div>
                                                <button className='px-1 text-sm font-thin border bg-gray-50'>Xóa</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='text-sm border-t-4 p-4 flex items-center' ><p>Hiện chưa có sản phẩn</p></div>
                        )}
                    </div>
                    <div className=' border-t-2 border-black font-bold my-4 py-2'>
                        <p className='uppercase'>tổng tiền tạm tính</p>
                        <p><span>{totalPrice.toLocaleString()}</span>đ</p>
                    </div>
                    <button className='uppercase text-white bg-black p-2 w-full' >tiến hành đặt hàng</button>
                    <p className='text-center mt-4 '>Xem chi tiết giỏ hàng</p>
                </div>

            </div>



        </>
    );
};

export default SideCart;