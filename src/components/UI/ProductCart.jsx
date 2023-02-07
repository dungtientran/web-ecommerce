import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { buyFast, openBuyFast } from '../../redux/slice/cartSlice';

const ProductCart = ({ item }) => {
 
    const dispatch = useDispatch();
    const haldleClickBuyFast = () => {
        dispatch(openBuyFast(!null))
        dispatch(buyFast(item._id))
    }
    return (
        <div className='relative cardhover'>
            <Link to={`/product/${item._id}`}  
            className=' flex flex-col justify-between border-yellow-300 cardhover rounded-lg
            mg:h-[200px]
            lg:h-[300px]
            xl:h-[400px]
            2xl:h-[540px]
            '>
                <div className=' border-black flex flex-col justify-between relative
                lg:p-6
                xl:p-14
                '>
                    <div className='overflow-hidden p-3'>
                        <img src={`https://shope-b3.thaihm.site/${item.thumbnail}`} alt={item.productName} className='w-full' />
                    </div>
                    <div className='text-center my-2 space-y-1'>
                        <p className='font-semibold truncate'>{item.productName}</p>
                        <p className='text-red-600 text-sm'> {item.price?.toLocaleString() || 'Hiện chưa có giá'}</p>
                        <p className='text-gray-400'>Thương hiệu: <span className=' text-black'>{item.brand}</span></p>
                    </div>
                </div>
            </Link>
            <div className=' w-full opacity-0 absolute xl:bottom-0  flex bg-black'>
                <Link className='w-full text-white p-2 text-center xl:text-lg lg:text-sm sm:hidden lg:block ' onClick={haldleClickBuyFast}>Mua ngay</Link>
                <Link to={`/product/${item._id}`} className='w-full text-white p-2 text-center xl:text-lg lg:text-sm md:text-xs md:p-1 border-l-2 border-white'>Xem chi tiết</Link>
            </div>
        </div>

    );
};

export default ProductCart;