import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { buyFast, openBuyFast } from '../../redux/slice/openSlice';

const ProductCart = ({ item }) => {
 
    const dispatch = useDispatch();
    const haldleClickBuyFast = () => {
        // (e) => e.stopPropagation()
        dispatch(openBuyFast(!null))
        dispatch(buyFast(item._id))
    }
    return (
        <div className='relative cardhover'>
            <Link to={`/product/${item._id}`}  className='flex flex-col justify-between border-yellow-300 cardhover rounded-lg h-[560px]'>
                <div className='p-14 border-black flex flex-col justify-between relative'>
                    <div className='overflow-hidden p-3'>
                        <img src={`https://shope-b3.thaihm.site/${item.thumbnail}`} alt="" className='w-full' />
                    </div>
                    <div className='text-center my-2 space-y-1'>
                        <p className='font-semibold truncate'>{item.productName}</p>
                        <p className='text-red-600 text-sm'> {item.price?.toLocaleString() || 'Hiện chưa có giá'}</p>
                        <p className='text-gray-400'>Thương hiệu: <span className=' text-black'>{item.brand}</span></p>
                    </div>
                </div>
            </Link>
            <div className=' w-full opacity-0 absolute bottom-0 flex bg-black'>
                <Link className='w-full text-white p-2 text-center text-lg' onClick={haldleClickBuyFast}>Mua ngay</Link>
                <Link to={`/product/${item._id}`} className='w-full text-white p-2 text-center text-lg border-l-2 border-white'>Xem chi tiết</Link>
            </div>
        </div>

    );
};

export default ProductCart;