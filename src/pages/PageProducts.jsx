import React, { useState } from 'react';
import UiFilter from '../components/filter/UiFilter';

const PageProducts = () => {
    const listProducts = JSON.parse(localStorage.getItem('All_Producst'));
    const productName = localStorage.getItem('PRODUCTS_NAME')
    const brand = listProducts.map(item => item.brand);
    const listBrand = [...new Set(brand)];

        return (
            <div className='pt-20 px-10'>
                <p className='font-bold text-2xl'>{productName}</p>
                <UiFilter listBrand={listBrand} productName ={productName} />
            </div>
        );
    };

    export default PageProducts;