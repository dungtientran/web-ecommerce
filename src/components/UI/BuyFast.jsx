import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openBuyFast } from '../../redux/slice/openSlice';
import ImgSlider from './Deltails/ImgSlider';
import SingleCartInfor from './Deltails/SingleCartInfor';

const BuyFast = () => {
    const isOpen = useSelector((state) => state.open?.openBuyFast);
    const id = useSelector((state) => state.open?.buyFast);
    const dispatch = useDispatch();
    const listProduct = useSelector(state => state.products?.allproducts);
    const products = listProduct.find((item) => item._id === id);
    const product = products?.listDtail?.map(item => item.listImg).reduce((a, b) => {
        return a.concat(b)
    }, []);
    const thumbnail = []
    listProduct.map((item) => {
        if(item._id === id) {
            thumbnail.push(item.thumbnail)
        }
        return item.thumbnail
    })
    
    return (
        <>
            {isOpen ? (
                <div className=' flex items-center justify-center bg-black-rgba fixed top-0 right-0 w-full h-full z-10' onClick={() => dispatch(openBuyFast(null))}>
                    <div onClick={(e) => e.stopPropagation()} className='w-[50%] h-[70%] bg-white z-10'>
                        <div className='flex justify-between p-6 m-auto'>
                            <div >
                                <ImgSlider imgs={product} />
                            </div>
                            <div className='space-y-4'>
                                <SingleCartInfor products={products} thumbnail = {thumbnail[0]} id = {id}/>
                                <div className='uppercase flex justify-between items-center border-b-2'>
                                    <div className='text-sm'>Thông số sản phẩm</div>
                                    <button className='text-xl'>+</button>
                                </div>
                                <div className='uppercase flex justify-between items-center border-b-2'>
                                    <div className='text-sm'>Chính sách đổi trả</div>
                                    <button className='text-xl'>+</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            ) : ''}
        </>
    );
};

export default BuyFast;