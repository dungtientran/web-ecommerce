import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeAvatar, changePassword, changeUserInfor } from '../apis';
import NaviSuv from '../components/naviSuv/NaviSuv';
import { getUserInfor } from '../redux/slice/authSlice';

const UserInfor = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserInfor())
    },[dispatch])
    const userInfor = useSelector(state => state.auth.userInfor)
    const navigate = useNavigate()

    const [img, setImg] = useState()
    const [name, setName] = useState();
    const [fullName, setFullName] = useState();
    const [phone, setPhone] = useState();
    const [sex, setSex] = useState();
    const [birth, setBirth] = useState();
    const [oldPass, setOldPass] = useState();
    const [newPass, setNewPass] = useState();

    const handleChangeAvatar = () => {
        changeAvatar({
            avatar: img
        })
    }
    const handleChangeUserInfor = (e) => {
        e.preventDefault()
        changeUserInfor({
            username: name,
            fullname: fullName,
            phone: phone,
            sex: sex,
            dateOfBirth: birth
        })
    }
    const handleChangePassword = async (e) => {
        e.preventDefault()
        const response = await changePassword({
            oldPass: oldPass,
            newPass: newPass
        })
        if(response.status === 200) {
            localStorage.clear()
            navigate('/login')
            alert('Đổi thành công, Đăng nhập lại')
        }
    }



    return (
        <div>
            <NaviSuv nav={'Profile'} />
            <Divider />
            <div className='flex px-8'>
                <div className='flex justify-between w-[40%] m-auto space-x-16 p-8 bg-gray-50'>
                    <div className='w-[40%] flex flex-col justify-center'>
                        <img src={`${userInfor.avatar}`} alt="avata"  />
                        <button className='p-2 bg-black text-white rounded-lg mt-4'>Avatar</button>
                    </div>
                    <div className='space-y-4 flex flex-col justify-center shadow-inner'>
                        <div className='space-y-2 px-16 bg-gray-300  py-10 rounded-lg'>
                            <p className='text-lg'><span className='font-semibold text-xl p-1'>Tên:</span> {userInfor.username}</p>
                            <p className='text-lg'><span className='font-semibold text-xl p-1'>Email:</span> {userInfor.email}</p>
                            <p className='text-lg'><span className='font-semibold text-xl p-1'>Role:</span> {userInfor.role}</p>
                        </div>
                        <div>
                            <button className='p-2 w-full bg-black text-white rounded-lg'>Xem hàng Order</button>
                            <div>
                                <button className='p-2 w-full bg-black text-white mt-2 rounded-lg'>Thay đổi thông tin cá nhân</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] space-y-6'>
                    <p className='text-2xl font-bold uppercase'>Thay đổi thông tin cá nhân</p>
                    <div className='space-y-2'>
                        <p className='text-lg font-semibold'>Đổi Avatar</p>
                        <input type="file" accept='image/png, image.jpg' onChange={(e) => setImg(e.target.value) } />
                        <button className='py-1 px-2 bg-black text-white ml-10 rounded-lg' onClick={handleChangeAvatar}>Thay đổi</button>
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>Đổi thông tin user</p>
                        <form className='flex flex-col space-y-2' onSubmit={handleChangeUserInfor}>
                            <input onChange={(e) => setName(e.target.value)} className='bg-gray-100 rounded-lg px-2 py-2 w-[50%] shadow-inner outline-none' type="text" placeholder='Tên' />
                            <input onChange={(e) => setFullName(e.target.value)} className='bg-gray-100 rounded-lg px-2 py-2 w-[50%] shadow-inner outline-none' type="text" placeholder='Họ tên đầy đủ' />
                            <input onChange={(e) => setPhone(e.target.value)} className='bg-gray-100 rounded-lg px-2 py-2 w-[50%] shadow-inner outline-none' type="text" placeholder='Số điện thoại' />
                            <input onChange={(e) => setSex(e.target.value)} className='bg-gray-100 rounded-lg px-2 py-2 w-[50%] shadow-inner outline-none' type="text" placeholder='Giới tính' />
                            <input onChange={(e) => setBirth(e.target.value)} className='bg-gray-100 rounded-lg px-2 py-2 w-[50%] shadow-inner outline-none' type="text" placeholder='Ngày sinh' />
                            <button className='w-[10%] py-1 px-2 bg-black text-white rounded-lg'>Đổi</button>
                        </form>
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>Đổi password</p>
                        <form className='flex flex-col space-y-2' onSubmit={handleChangePassword}>
                            <input onChange={(e) => setOldPass(e.target.value)} className='bg-gray-100 rounded-lg px-2 py-2 w-[50%] shadow-inner outline-none' type="text" placeholder='Old pass' />
                            <input onChange={(e) => setNewPass(e.target.value)} className='bg-gray-100 rounded-lg px-2 py-2 w-[50%] shadow-inner outline-none' type="text" placeholder='New pass' />
                            <button className='w-[10%] py-1 px-2 bg-black text-white rounded-lg'>Đổi</button>
                        </form>
                    </div>

                </div>
            </div>
            <Divider />
        </div>
    );
};

export default UserInfor;