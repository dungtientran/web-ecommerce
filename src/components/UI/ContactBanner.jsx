
import { FacebookOutlined, InstagramOutlined, PhoneOutlined, TwitterOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import contactbanner from '../../assets/image/ContactBanner.png'
const ContactBanner = () => {
    return (
        <section className='mt-20'>

            <div className='relative h-[400px] flex items-center'>
                <img src={contactbanner} alt="contactbanner" className='w-full' />
                <Link to='contact' className='w-[26%] text-center bg-black-rgba absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-4 text-white border-4 text-2xl hover:bg-black'>Xem danh sách cửa hàng </Link>
            </div>

            <div className='w-[70%] m-auto border-t-2 flex justify-between'>
                <div className='p-8 space-y-2'>
                    <p className='text-lg'>Gọi mua hàng ( 08:30-21:30 )</p>
                    <p className='flex items-center space-x-3'>
                        <span className='w-6 h-6 bg-red-600 rounded-full flex items-center justify-center'><PhoneOutlined /></span><span className='text-3xl'>032.555.98.18</span></p>
                    <p className='text-xs'>Tất cả các ngày trong tuần</p>
                </div>
                <div className='p-8 space-y-2'>
                    <p className='text-lg'>Góp ý, Khiếu nại ( 08:30-21:30 )</p>
                    <p className='flex items-center space-x-3'>
                        <span className='w-6 h-6 bg-red-600 rounded-full flex items-center justify-center'><PhoneOutlined /></span><span className='text-3xl'>032.555.98.18</span></p>
                    <p className='text-xs'>Tất cả các ngày trong tuần ( trừ ngày lễ )</p>
                </div>
                <div className='p-8 space-y-2'>
                    <p className='text-lg'>Đăng ký nhận thông tin mới</p>
                    <div className='flex justify-between'>
                        <input className='outline-none p-1 border ' type="text" placeholder='Nhập email....' />
                        <button className='bg-black text-white p-2' >Đăng ký</button>
                    </div>
                </div>
                <div className='p-8 space-y-2'>
                    <p className='text-lg'>Theo dõi chúng tôi</p>
                    <div className='flex space-x-3'>
                        <span className='Btn'><FacebookOutlined /></span>
                        <span className='Btn'><InstagramOutlined /></span>
                        <span className='Btn'> <TwitterOutlined /></span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactBanner;