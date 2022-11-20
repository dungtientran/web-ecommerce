import { Col, Row} from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

import UiFilter from './UiFilter';

const Filter = () => {

    const searchText = useSelector(state => state.searchtext.searchText )
    const listProducts = JSON.parse(localStorage.getItem('All_Producst'));
    const brand = listProducts.map(item => item.brand);
    const listBrand = [...new Set(brand)];

    return (
        <>
            <Row className='px-10 space-y-8'>
                <Col span={24} className='h-5vh flex justify-center py-10'>
                    <div className='space-y-2 relative flex flex-col justify-center'>
                        <h1 className='text-2xl font-semibold text-center'> Tìm Kiếm</h1>
                        <p className='font-semibold text-2xl text-center'> {searchText} </p>
                        <p className='w-20 bg-black h-1 absolute left-[50%] translate-x-[-50%] -bottom-5'></p>
                    </div>
                </Col>
                <Col span={24}>
                    <UiFilter listBrand ={listBrand} searchText={searchText} />
                </Col>
            </Row>
        </>
    );
};

export default Filter;