
import { Radio } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginCart, openSideCart } from '../../../redux/slice/cartSlice';
import * as apis from '../../../apis'

const SingleCartInfor = ({ products, id }) => {
    const [newID, setNewID] = useState(id);
    const [change, setChange] = useState(false);
    const [color, setColor] = useState();
    const [rom, setRom] = useState();
    const [ram, setRam] = useState();
    const [amount, setAmount] = useState(1);
    const [price, setPrice] = useState(products?.price);
    const isOpen = useSelector((state) => state.cart.openBuyFast);
    const listColor = products.listDtail.map(item => item.color);
    const listRam = products.listDtail.map(item => item.ram);
    const listRom = products.listDtail.map(item => item.rom);
    const [rams, roms] = [Array.from(new Set(listRam)), Array.from(new Set(listRom))];
    const token = localStorage.getItem('TOKEN');
    const dispatch = useDispatch();
    
    useEffect(() => {
        const buttonAddCart = document.querySelector('.buttonAddCart');
        const notificationChoose = document.querySelector('.notificationChoose');
        buttonAddCart.setAttribute('disabled', '');
        products.listDtail.filter(item => {
            if (item.color === color && item.ram === ram && item.rom === rom) {
                buttonAddCart.removeAttribute('disabled');
                notificationChoose.style.display = 'none';
                setNewID(item._id);
                setPrice(item.price)
            }
            return item
        })
    }, [color, ram, rom]);
  

    const handleChooseColor = ({ target: { value } }) => {
        setColor(value);
        setPrice('Hết Hàng')
    }
    const handleChooseRam = ({ target: { value } }) => {
        setRam(value);
        setPrice('Hết Hàng')
    }
    const handleChooseRom = ({ target: { value } }) => {
        setRom(value);
        setPrice('Hết Hàng')
    }
    const nextAmount = () => {
        setAmount(amount + 1)
    }
    const prevAmount = () => {
        setAmount(amount - 1)
        if (amount === 1) {
            setAmount(1)
        }
    }
    const addCartItem = {
        productDetailId: newID,
        quantity: amount
    }
    const hanldeAddCartItem = () => {
        if (token) {
            dispatch(openSideCart(!null));
            apis.addToCart(addCartItem);
            dispatch(loginCart())
        } else {
            alert('Đăng nhập để mua hàng')
        }
    }

    return (
        <>
            <div className='space-y-4'>
                <p className='text-2xl'>{products?.productName}</p>
                <p><span className='font-semibold'>Mã sản phẩm: </span> <span className='italic font-thin'>{newID}</span></p>
                <div className='xl:p-8 lg:p-4 md:p-2 xl:text-4xl lg:text-2xl md:text-lg bg-gray-200 text-center text-red-600'><span className='notificationPrice'>
                    {!change ?
                        <span>{price?.toLocaleString() || 'Hiện chưa có giá'}</span>
                        :
                        <span>Chọn thông số để xem giá</span>}
                </span>
                </div>
                <div className='flex space-x-3 items-center'>
                    <p className='font-bold'>Màu sắc: </p>
                    <Radio.Group
                        options={listColor}
                        value={color}
                        optionType='button'
                        buttonStyle='solid'
                        onChange={handleChooseColor}
                        size='small'
                    />
                </div>
                <div className='flex space-x-3 items-center'>
                    <p className='font-bold'>Ram: </p>
                    <Radio.Group
                        options={rams}
                        value={ram}
                        optionType='button'
                        buttonStyle='solid'
                        onChange={handleChooseRam}
                        size='small'
                    />
                </div>
                <div className='flex space-x-3 items-center'>
                    <p className='font-bold'>Rom: </p>
                    <Radio.Group
                        options={roms}
                        value={rom}
                        optionType='button'
                        buttonStyle='solid'
                        onChange={handleChooseRom}
                        size='small'
                    />
                </div>
                <div className='flex'>
                    <button className='py-1 px-4 border ' onClick={prevAmount}>-</button>
                    <input type="text" value={amount} onChange={(e) => e.target.value} className='text-center border outline-none w-[64px]' />
                    <button className='py-1 px-4 border ' onClick={nextAmount}>+</button>
                </div>
                <div className='relative hoverButonAddCart'>
                    {!isOpen ? (
                        <div className='flex w-full justify-between items-center text-white'>
                            <button className='buttonAddCart w-full border bg-black p-2 text-lg hoverButonAddCart sm:text-xs md:text-base' onClick={hanldeAddCartItem}>Thêm vào giỏ hàng</button>
                            <button className='w-full border bg-black p-2 text-lg sm:text-xs md:text-base'>Mua ngay</button>
                        </div>
                    ) : (
                        <button className=' buttonAddCart p-4 bg-black text-white w-[50%] sm:text-xs md:text-base ' onClick={hanldeAddCartItem} >Mua nhanh</button>
                    )}
                    <div className='w-[30%] text-xs bg-black text-white text-center absolute -bottom-[-100%] left-[30%] font-thin hidden py-2 rounded-lg notificationChoose '>
                        Chọn màu sắc và thông số !
                    </div>
                </div>

            </div>

        </>
    );
};

export default SingleCartInfor;