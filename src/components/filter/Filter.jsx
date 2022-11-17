import { Col, Row} from 'antd';
import React from 'react';
import UiFilter from './UiFilter';

const Filter = () => {
    const listProducts = JSON.parse(localStorage.getItem('All_Producst'));
    const brand = listProducts.map(item => item.brand);
    const listBrand = [...new Set(brand)];
    return (
        <>
            <Row className='px-10 space-y-8'>
                <Col span={24} className='h-5vh  flex justify-center py-10'>
                    <div className='space-y-2 relative flex flex-col justify-center'>
                        <h1 className='text-2xl font-semibold text-center'>Tìm Kiếm</h1>
                        <p className='font-thin text-gray-500 text-center'>Có 21 sản phẩm cho tìm kiếm</p>
                        <p className='w-20 bg-black h-1 absolute left-[50%] translate-x-[-50%] -bottom-5'></p>
                    </div>
                </Col>
                <Col span={24}>
                    <UiFilter listBrand ={listBrand} />
                </Col>
               
            </Row>
        </>
    );
};

export default Filter;