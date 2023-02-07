import React from 'react';
import { HomeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
const NaviSuv = ({nav, smallNav}) => {
    return (
        <div className='flex space-x-3 items-center text-xs pl-10 py-10'>
            <Link to='/' className='flex items-center space-x-1'>
                <HomeOutlined />
                <span>Trang chủ</span>
            </Link>
            <div className=' flex items-center border-l-2 border-r-2 px-2'>
                {nav}
            </div>
            <div>
                {smallNav}
            </div>
        </div>
    );
};

export default NaviSuv;