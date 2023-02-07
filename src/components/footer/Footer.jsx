import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <div className='py-8 w-[70%] m-auto flex justify-between pb-16'>
                <div className='space-y-2'>
                    <p className='uppercase font-semibold text-lg pb-10'>Hỗ trợ khách hàng</p>
                    <p className='text-base font-thin'>Hướng dẫn chọn size</p>
                    <p className='text-base font-thin'>Chính sách đổi/Trả</p>
                    <p className='text-base font-thin'>Chính sách bảo mật</p>
                    <p className='text-base font-thin'>Thanh toán, Giao nhận</p>
                </div>
                <div className='space-y-2'>
                    <p className='uppercase font-semibold text-lg pb-10'>Về chúng tôi</p>
                    <p className='text-base font-thin'>Hàng chất lượng cao</p>
                </div>
                <div className='space-y-2'>
                    <p className='uppercase font-semibold text-lg pb-10'>Hệ thống cửa hàng</p>
                  
                </div>
                <div className='space-y-2'>
                    <p className='uppercase font-semibold text-lg pb-10'>Fanpage chúng tôi</p>
                  
                </div>
             
            </div>
            <div className='py-8 bg-white'>

            </div>
        </div>
    );
};

export default Footer;