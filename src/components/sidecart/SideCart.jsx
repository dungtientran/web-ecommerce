import React, { useEffect } from 'react';
import { ArrowRightOutlined, ExportOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { loginCart, openSideCart } from '../../redux/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const SideCart = () => {
    const isOpen = useSelector((state) => state.cart.openSideCart);
    const dispatch = useDispatch();
    const loginCar = useSelector(state => state.cart.listCart);
    const listCartProduct = new Array(...loginCar);
    if(!listCartProduct[0]?.productDetailId){
        listCartProduct.splice(0, 1);
    }
    const totalQuantity = listCartProduct?.map(item => item.quantity)?.reduce((total, item) => total + Number(item), 0);
    const totalPrice = listCartProduct?.map(item => Number(item.quantity) * Number(item.productDetailId.price)).reduce((total, item) => total + item, 0);
    
    return (
        <div className='sm:hidden lg:block'>
            <div onClick={() => dispatch(openSideCart(null))} className={`w-full h-full bg-black-rgba fixed top-0 z-20 ${!isOpen ? 'hidden' : 'block'}`}></div>
            <div>
                <div className={`w-[24%] h-full top-0 right-0 fixed z-40 py-14 px-4 bg-white ${!isOpen ? 'translate-x-full' : 'translate-x-0'} ease-in-out duration-1000`}>
                    <div className='flex justify-between '>
                        <div>
                            <p className='text-xl font-semibold'>Giỏ hàng</p>
                            <p className='my-2'>Bạn đang có <span className='font-semibold text-red-500'> {totalQuantity || 0} </span> sản phẩm trong giỏ hàng</p>
                        </div>
                        <Link className='text-xl mr-2' onClick={() => dispatch(openSideCart(null))}>
                            <ExportOutlined />
                        </Link>
                    </div>
                    <div className='py-4'>
                        {(listCartProduct?.length > 0) ? (
                            <div className='overflow-y-scroll'>
                                {listCartProduct?.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center border-t-2 px-1 py-2'>
                                        <div className='w-[16%]'>
                                            <img src={`https://shope-b3.thaihm.site/${item.productDetailId.listImg[0]}`} alt={`${item.productDetailId.productName}`} className='w-full' />
                                        </div>
                                        <div className='w-[75%] space-y-2 flex justify-between items-center'>
                                            <div className='space-y-2'>
                                                <p className='font-thin'>{item.productDetailId.productId.productName}</p>
                                                <p className='text-xs italic'><span>Màu: </span> <span className='font-semibold'>{item.productDetailId.color}</span></p>
                                                <p className='text-xs italic'><span>Ram: </span> <span className='font-semibold'>{item.productDetailId.ram}</span></p>
                                                <p className='text-xs italic'><span>Rom: </span> <span className='font-semibold'>{item.productDetailId.rom}</span></p>
                                                <p className='text-xs italic'><span>Giá: </span> <span className='font-semibold'>{item.productDetailId.price?.toLocaleString()}</span></p>
                                                <p className='text-xs italic'><span>Số lượng: </span> <span className='font-semibold'>{item.quantity}</span></p>
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
                        <p><span>{totalPrice?.toLocaleString()}</span>đ</p>
                    </div>
                    <Link to='checkout' className='uppercase text-white bg-black p-2 w-full block text-center' onClick={() => dispatch(openSideCart(null))} >tiến hành đặt hàng</Link>
                    <Link to= 'cart' className='flex justify-center mt-4' onClick={() => dispatch(openSideCart(null))}>
                        <div className='flex space-x-1'>
                            <span> Xem chi tiết giỏ hàng</span>
                            <span className='flex items-center'><ArrowRightOutlined /></span>
                        </div>
                    </Link>
                </div>

            </div>



        </div>
    );
};

export default SideCart;