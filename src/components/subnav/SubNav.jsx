import { Col, Row } from 'antd';
import React from 'react';
import icons from '../../assets/data/icons';
import { Link } from 'react-router-dom';

const SubNav = () => {
    return (
        <Row className='flex justify-between items-center w-[24%] m-auto mt-10'>
            {icons.map((icon, index) => (
                <Link key={index} className='hover:text-orange-500'>
                    <div className='w-14 h-14 bg-black border rounded-full'>
                    </div>
                    <Col className='uppercase text-sm mt-3 flex justify-center font-semibold'>
                        {icon.name}
                    </Col>
                </Link>
            ))}
        </Row>
    );
};

export default SubNav;