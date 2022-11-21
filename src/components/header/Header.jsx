import React, { useState } from 'react';
import TopHeader from './TopHeader';
import logo from '../../assets/image/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { transferNavBar } from '../../redux/slice/navBarSlide';
import { getSearchText } from '../../redux/slice/searchSlice';


const Header = () => {
    const categoreis = JSON.parse(localStorage.getItem('ALL_CATEGORIES_NAME'))?.map(item => item.categoryName)
    const [fix, setFix] = useState(false);
    const [searchText, setSearchText] = useState('')
    const setFixed = () => {
        if (window.scrollY > 1) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener('scroll', setFixed);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = () => {
        location.reload()
    }
    const hadleNavClick = (e) => {  
        const disPlay = e.target.innerText;
        dispatch(transferNavBar(disPlay));
        location();
    }
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getSearchText(searchText))
        navigate('filter')
        setSearchText('')
    }
    return (
        <div className={fix ? 'fixed w-full top-0 shadow-lg animate-wiggle z-10' : ''}>
            <TopHeader />
            <section>
                <div className='flex justify-between items-center py-5 px-12 bg-white '>
                    <Link to='/' className='w-[15%]'>
                        <img src={logo} alt='logo' className='h-12' />
                    </Link>
                    <div className='space-x-5 uppercase font-semibold'>
                        {categoreis?.map((item, index) => (
                            <NavLink key={index} to={`shop/${item}`} className='py-6 text-lg nav hover:border-b-2 border-black' onClick={hadleNavClick}>
                                {item}
                            </NavLink>
                        ))}
                    </div>
                    <form className='w-[15%] flex items-center relative' onSubmit={handleSearch}>
                        <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Tìm kiếm...' className='border outline-none rounded-full w-full h-10 p-3' />
                        <button className='absolute right-4 top-[50%] translate-y-[-50%] flex items-center'><SearchOutlined /></button>
                    </form>
                </div>
            </section>
        </div>
    );

};

export default Header;