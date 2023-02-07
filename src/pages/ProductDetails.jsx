import { FacebookOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NaviSuv from '../components/naviSuv/NaviSuv';
import AddressShop from '../components/UI/Deltails/AddressShop';
import ImgSlider from '../components/UI/Deltails/ImgSlider';
import Service from '../components/UI/Deltails/Service';
import SingleCartInfor from '../components/UI/Deltails/SingleCartInfor';

const ProductDetails = () => {
    const { id } = useParams();
    const listProduct = JSON.parse(localStorage.getItem('ALL_PRODUCTS'));
    const products = listProduct?.find((item) => item._id === id);
    const product = products?.listDtail?.map(item => item.listImg).reduce((a, b) => {
        return a.concat(b)
    }, []);
    const thumbnail = []
    listProduct?.map((item) => {
        if (item._id === id) {
            thumbnail.push(item.thumbnail)
        }
        return item.thumbnail
    })
    useEffect(()=>{
        window.scroll(0, 0)
    },[])
    return (
        <div className=''>
            <NaviSuv nav={products?.categoryId.categoryName} smallNav={products?.productName} />
            <div className=' lg:flex justify-between pt-[20px] w-[50%] m-auto h-screen'>
                <ImgSlider imgs={product} />
                <div className='w-[50%] space-y-4 sm:pt-6'>
                    <SingleCartInfor products={products} thumbnail={thumbnail[0]} id={id} />
                    <div className='p-4 flex justify-center space-x-4 items-center '>
                        <span>Chia sẻ </span> <span className='Btn'><FacebookOutlined /></span>
                    </div>
                    <AddressShop />
                    <div className='uppercase flex justify-between items-center border-b-2'>
                        <div className='text-sm'>Thông số sản phẩm</div>
                        <div className='text-xl'>+</div>
                    </div>
                    <div className='uppercase flex justify-between items-center border-b-2'>
                        <div className='text-sm'>Chính sách đổi trả</div>
                        <div className='text-xl'>+</div>
                    </div>
                    <Service />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;