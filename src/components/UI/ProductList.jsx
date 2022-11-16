import React from 'react';
import ProductCart from './ProductCart';

const ProductList = ({ products }) => {
    return (
        <div className=' grid grid-cols-4 gap-16'>
            {products?.map((item, index) => (
                <ProductCart key={index} item={item} />
            ))}
        </div>
    );
};

export default ProductList;