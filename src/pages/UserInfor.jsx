import { Divider } from 'antd';
import React from 'react';
import NaviSuv from '../components/naviSuv/NaviSuv';

const UserInfor = () => {
    const userInfor = JSON.parse(localStorage.getItem('USER'));
    console.log(userInfor);
    return (
        <div>
            <NaviSuv nav={'Profile'} />
            <Divider />
            <div className='flex'>
                <div className='flex justify-between w-[40%] m-auto space-x-16 p-8 bg-gray-50'>
                    <div className='w-[40%] flex flex-col justify-center'>
                        <img src={`${userInfor.avatar}`} alt="avata" />
                        <button className='p-2 bg-black text-white rounded-lg mt-4'>Avatar</button>
                    </div>
                    <div className='space-y-4 flex flex-col justify-center'>
                        <div className='space-y-2 px-16 bg-gray-300  py-10 rounded-lg'>
                            <p className='text-lg'><span className='font-semibold text-xl p-1'>Tên:</span> {userInfor.username}</p>
                            <p className='text-lg'><span className='font-semibold text-xl p-1'>Email:</span> {userInfor.email}</p>
                            <p className='text-lg'><span className='font-semibold text-xl p-1'>Role:</span> {userInfor.role}</p>
                        </div>
                        <div>
                            <button className='p-2 w-full bg-black text-white rounded-lg'>Xem hàng Order</button>
                            <div>
                                <button className='p-2 w-full bg-black text-white mt-2 rounded-lg'>Update thông tin cá nhân</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%]'>
                    UPDATE
                </div>
            </div>
            <Divider />
        </div>
    );
};

export default UserInfor;