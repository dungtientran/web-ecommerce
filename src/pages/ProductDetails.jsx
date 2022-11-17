import { FacebookOutlined } from '@ant-design/icons';
import React from 'react';
import { useParams } from 'react-router-dom';
import AddressShop from '../components/UI/Deltails/AddressShop';
import ImgSlider from '../components/UI/Deltails/ImgSlider';
import Service from '../components/UI/Deltails/Service';
import SingleCartInfor from '../components/UI/Deltails/SingleCartInfor';
const ProductDetails = () => {
    const { id } = useParams();
    const listProduct = JSON.parse(localStorage.getItem('All_Producst'));
    const products = listProduct.find((item) => item._id === id);
    const product = products?.listDtail?.map(item => item.listImg).reduce((a, b) => {
        return a.concat(b)
    }, []);
    const thumbnail = []
    listProduct.map((item) => {
        if (item._id === id) {
            thumbnail.push(item.thumbnail)
        }
        return item.thumbnail
    })
    return (
        <div className='flex justify-between pt-[20px] w-[60%] m-auto h-screen'>
            <ImgSlider imgs={product} />
            <div className='w-[60%] space-y-4'>
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
    );
};

export default ProductDetails;