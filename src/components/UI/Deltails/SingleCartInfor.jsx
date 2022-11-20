
import { Radio } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, openSideCart } from '../../../redux/slice/openSlice';

const SingleCartInfor = ({ products, id }) => {
    const [newID, setNewID] = useState(id);
    const [thumbnail, setThumbnail] = useState();
    const [change, setChange] = useState(false);
    const [color, setColor] = useState();
    const [rom, setRom] = useState();
    const [ram, setRam] = useState();
    const [amount, setAmount] = useState(1);
    const [price, setPrice] = useState()
    const isOpen = useSelector((state) => state.open.openBuyFast);
    const listColor = products.listDtail.map(item => item.color);
    const listRam = products.listDtail.map(item => item.ram);
    const listRom = products.listDtail.map(item => item.rom);
    const [rams, roms] = [Array.from(new Set(listRam)), Array.from(new Set(listRom))];
    const token = localStorage.getItem('TOKEN');

    useEffect(() => {

        const buttonAddCart = document.querySelector('.buttonAddCart');
        buttonAddCart.setAttribute('disabled', '');
        products.listDtail.map((item) => {
            if (item.color === color && item?.ram === ram && item.rom === rom) {
                setPrice(item.price)
                setChange(true)
                buttonAddCart.removeAttribute('disabled')
                setNewID(item._id);
                setThumbnail(item.listImg[0]);
            }
            return item
        })
    }, [color, ram, rom]);
    const dispatch = useDispatch();
    const productBuy = {
        id: newID,
        name: products?.productName,
        thumbnail: thumbnail,
        color: color,
        rom: rom,
        ram: ram,
        amountBuy: amount,
        price: price,
    }
    const hanldeAddCartItem = () => {
        if (token) {
            dispatch(openSideCart(!null));
            dispatch(addCart(productBuy));
        }else{
            alert('Đăng nhập để mua hàng')
        }
    }
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
    return (
        <>
            <div className='space-y-4'>
                <p className='text-2xl'>{products?.productName}</p>
                <p><span className='font-semibold'>Mã sản phẩm: </span> <span className='italic font-thin'>{newID}</span></p>
                <div className='p-8 text-4xl bg-gray-200 text-center text-red-600'><span className='notificationPrice'>{change ? (`${price.toLocaleString()}`) : (<span className='text-xl'>Chọn thông  để xem giá</span>)}</span></div>
                <div className='flex space-x-3 items-center'>
                    <p>Màu sắc: </p>
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
                    <p>Ram: </p>
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
                    <p>Rom: </p>
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
                    <button className='py-1 px-4 border ' onClick={() => setAmount(amount - 1)}>-</button>
                    <input type="text" value={amount} onChange={(e) => e.target.value} className='text-center border outline-none w-[64px]' />
                    <button className='py-1 px-4 border ' onClick={() => setAmount(amount + 1)}>+</button>
                </div>
                <div className='relative'>
                    {!isOpen ? (
                        <div className='flex w-full justify-between items-center text-white'>
                            <button className='buttonAddCart w-full border bg-black p-2 text-lg hoverButonAddCart' onClick={hanldeAddCartItem}>Thêm vào giỏ hàng</button>
                            <button className='w-full border bg-black p-2 text-lg'>Mua ngay</button>
                        </div>
                    ) : (
                        <button className=' buttonAddCart p-4 bg-black text-white w-[50%]' onClick={hanldeAddCartItem} >Mua nhanh</button>
                    )}
                    <div className='w-[30%] text-xs bg-black text-white text-center absolute -bottom-[-100%] left-[30%] font-thin notificationChoose '>
                        Vui lòng chọn thông số!
                    </div>
                </div>

            </div>

        </>
    );
};

export default SingleCartInfor;