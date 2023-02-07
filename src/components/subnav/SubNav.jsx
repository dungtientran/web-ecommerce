import { Row } from 'antd';
import React from 'react';
import icons from '../../assets/data/icons';
import { Link } from 'react-router-dom';

const SubNav = () => {
    return (
        <Row className=' justify-between items-center w-[24%] m-auto mt-10 lg:flex sm:hidden'>
            {icons.map((icon, index) => (
                <Link key={index} className='hover:text-orange-500'>
                    <div>
                        <div className='xl:w-14 xl:h-14 lg:w-8 lg: h-8 bg-black border rounded-full m-auto'>
                        
                        </div>
                        <div className='uppercase xl:text-sm  xl:font-semibold lg:font-thin lg:text-xs text-center'>
                            {icon.name}
                        </div>
                    </div>
                </Link>
            ))}
        </Row>
    );
};

export default SubNav;