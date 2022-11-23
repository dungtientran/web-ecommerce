import { PushpinOutlined } from '@ant-design/icons';

import React from 'react';



const AddressShop = () => {

  
    return (
        <>
            <div>
                <button className='bg-gray-200 hover:bg-blue-300 hover:text-white duration-700  p-2 rounded-lg text-sm font-semibold'>Hà Nội</button>
            </div>
            <div className='text-sm  p-3 bg-blue-100'>
                <div><PushpinOutlined className='bg-black text-white rounded-full' /> <span>Số 7 Ngõ 76 Nguyễn Chí Thanh, Láng Thượng (Còn hàng)</span></div>
            </div>     
            <div className='text-sm hidden'>
                <div><PushpinOutlined className='bg-black text-white rounded-full' /> <span>Số 7 Ngõ 76 Nguyễn Chí Thanh, Láng Thượng (Còn hàng)</span></div>
                <div><PushpinOutlined className='bg-black text-white rounded-full' /> <span>Số 7 Ngõ 76 Nguyễn Chí Thanh, Láng Thượng (Còn hàng)</span></div>
                <div><PushpinOutlined className='bg-black text-white rounded-full' /> <span>Số 7 Ngõ 76 Nguyễn Chí Thanh, Láng Thượng (Còn hàng)</span></div>
            </div>     
            <div className='text-sm hidden'>
                <div><PushpinOutlined className='bg-black text-white rounded-full' /> <span>Số 7 Ngõ 76 Nguyễn Chí Thanh, Láng Thượng (Còn hàng)</span></div>
                <div><PushpinOutlined className='bg-black text-white rounded-full' /> <span>Số 7 Ngõ 76 Nguyễn Chí Thanh, Láng Thượng (Còn hàng)</span></div>
                <div><PushpinOutlined className='bg-black text-white rounded-full' /> <span>Số 7 Ngõ 76 Nguyễn Chí Thanh, Láng Thượng (Còn hàng)</span></div>
            </div>     
        </>
    );
};

export default AddressShop;