import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UiFilter from '../components/filter/UiFilter';
import NaviSuv from '../components/naviSuv/NaviSuv';

const PageProducts = () => {
    const productName = localStorage.getItem('PRODUCTS_NAME');
    return (
        <>
            <div className='mt-3 mb-10'>
                <NaviSuv nav={productName} />
            </div>
            <div className='pt-20 px-10'>

                <p className='font-bold text-2xl'>{productName}</p>
                <UiFilter productName={productName} />
            </div>
        </>
    );
};

export default PageProducts;