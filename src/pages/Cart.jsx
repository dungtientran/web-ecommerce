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
    if (!listCartProduct[0]?.productDetailId) {
        listCartProduct.splice(0, 1);
    }
    const totalQuantity = listCartProduct?.map(item => item.quantity)?.reduce((total, item) => total + Number(item), 0);
    const totalPrice = listCartProduct?.map(item => Number(item.quantity) * Number(item.productDetailId?.price))?.reduce((total, item) => total + item, 0);

    const handleUpdateCart = () => {
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
            <NaviSuv nav={'Gi??? h??ng'} />
            <div className='flex w-[70%] m-auto justify-between'>
                <div className='space-y-6 w-[70%]'>
                    <div>
                        <span className='uppercase text-xl font-bold mr-2'>Gi??? h??ng c???a b???n</span>
                        <span>(C?? <span className='font-bold text-red-500'>{totalQuantity}</span> s???n ph???m trong gi??? h??ng)</span>
                    </div>
                    <div className='px-10 '>
                        {listCartProduct?.map((item, index) => (
                            <div key={index} className='flex justify-between items-center border-t-2 px-1 py-2'>
                                <div className='w-[20%] py-1'>
                                    <img src={`https://shope-b3.thaihm.site/${item.productDetailId?.listImg[0]}`} alt="L???i ???nh" className='w-full' />
                                </div>
                                <div className='w-[80%] space-y-2 flex justify-between items-center'>
                                    <div className='w-1/2 flex justify-between'>
                                        <div className='w-full'>
                                            <p className='font-thin pb-1 truncate w-[80%]'>{item.productDetailId?.productId?.productName}</p>
                                            <p className='text-xs italic font-bold'><span>M??u: </span> <span className='font-semibold ml-1'>{item.productDetailId?.color}</span></p>
                                            <p className='text-xs italic font-bold'><span>Ram: </span> <span className='font-semibold ml-1'>{item.productDetailId?.ram}</span></p>
                                            <p className='text-xs italic font-bold'><span>Rom: </span> <span className='font-semibold ml-1'>{item.productDetailId?.rom}</span></p>
                                            <p className='text-xs italic font-bold'><span>????n gi??: </span> <span className='font-semibold ml-1'>{item.productDetailId?.price?.toLocaleString()} ??</span></p>
                                            <p className='text-xs italic font-bold'><span>S??? l?????ng: </span> <span className='font-semibold ml-1'>{item.quantity} c??i</span></p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex items-center'>
                                            <div className='flex flex-col justify-center space-y-2'>
                                                <p className='sm:text-xs lg:text-sm xl:text-base'>Ch???n l???i s??? l?????ng</p>
                                                <div className='space-x-2 flex'>
                                                    <div className='flex'>
                                                        <input
                                                            type="text"
                                                            className='bg-gray-200 outline-none shadow-inner text-center w-[50%] py-1'
                                                            defaultValue={0}
                                                            onChange={(e) => (setQuantity(e.target.value), setProductId(item.productDetailId._id))} />
                                                        <button className='py-1 px-2 text-center bg-black text-white sendButton hover:bg-gray-400 hover:text-black rounded-lg' onClick={handleUpdateCart}>G???i</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <button
                                                className='px-2 text-sm font-thin border bg-gray-50 deleteCart hover:bg-black hover:text-white'
                                                onClick={() => {
                                                    setDelProductId(item.productDetailId._id)
                                                }}

                                            >X??a</button>
                                            <div className='checkDelete space-x-2 hidden'>
                                                <button className='w-4 h-4 bg-black text-white flex items-center justify-center rounded-full p-2 hover:bg-gray-400' onClick={handleRemoveCart}><CheckOutlined /></button>
                                                <button className='w-4 h-4 bg-black text-white flex items-center justify-center rounded-full p-2 hover:bg-gray-400 cancelDel'><LoginOutlined /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='space-y-6 sm:hidden lg:block'>
                    <div className='bg-gray-200 p-4 space-y-6'>
                        <p className='uppercase font-bold text-lg'>T??m t???t ????n h??ng</p>
                        <p className='font-thin'>Ch??a bao g???m ph?? v???n chuy???n</p>
                        <div className='flex justify-between font-bold border-b-[1px] border-dotted border-gray-400 pb-3'>
                            <p>T???ng ti???n: </p>
                            <p>{totalPrice?.toLocaleString()} ??</p>
                        </div>
                        <p className='italic font-thin'>B???n c?? th??? nh???m m?? gi???m gi?? ??? trang thanh to??n</p>
                        <div className='space-y-2 flex flex-col text-center'>
                            <Link to='/checkout' className='w-full uppercase p-2 bg-black text-white'>Ti???n h??nh ?????t h??ng</Link>
                            <Link to='/home' className='w-full uppercase p-2 bg-white text-black border border-black hover:bg-black hover:text-white'>Mua th??m s???n ph???m</Link>
                        </div>
                    </div>
                    <Service />
                </div>
            </div>

        </>
    );
};

export default Cart;