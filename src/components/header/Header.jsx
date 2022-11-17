import React, { useState } from 'react';
import TopHeader from './TopHeader';
import logo from '../../assets/image/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { transferNavBar } from '../../redux/slice/navBarSlide';


const Header = () => {
    const nav = [{ display: 'Home' }, { display: 'Điện Thoại' }, { display: 'Mouse' }, { display: 'Keyboard' }, { display: 'Laptop' }, { display: 'Ipad' }];
    const [fix, setFix] = useState(false);
    function setFixed() {
        if (window.scrollY > 1) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener('scroll', setFixed);
    const dispatch = useDispatch()
    const hadleNavClick = (e) => {
        const disPlay = e.target.innerText
        dispatch(transferNavBar(disPlay))
    }
    return (

        <div className={fix ? 'fixed w-full shadow-lg animate-wiggle z-10' : ''}>
            <TopHeader />
            <section>
                <div className='flex justify-between items-center py-5 px-12 bg-white '>
                    <Link to='/' className='w-[15%]'>
                        <img src={logo} alt='logo' className='h-12' />
                    </Link>
                    <div className='space-x-5 uppercase font-semibold'>
                        {nav.map((item, index) => (
                            <NavLink key={index} to={`shop/${item.display}`} onClick={hadleNavClick} className={(navClass) => navClass.isActive ? 'py-6 border-b-2 border-black text-lg' : ''}>
                                {item.display}
                            </NavLink>
                        ))}
                    </div>
                    <div className='w-[15%] flex items-center relative'>
                        <input type="text" placeholder='Tìm kiếm...' className='border outline-none rounded-full w-full h-10 p-3' />
                        <Link to='filter' className='absolute right-4 top-[50%] translate-y-[-50%] flex items-center'><SearchOutlined /></Link>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default Header;