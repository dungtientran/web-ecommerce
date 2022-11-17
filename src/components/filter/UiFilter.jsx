import { Select, Tag } from 'antd';
import React, { useState } from 'react';
import ProductList from '../UI/ProductList';

const UiFilter = ({ listBrand, productName }) => {

    const listProducts = JSON.parse(localStorage.getItem('All_Producst'));
    const [products, setProducts] = useState(listProducts);
    const hanfleFilter = (value) => {
        const filterProducts = listProducts.filter(item => item.brand === value);
        setProducts(filterProducts)
    }

    if(productName) {
        console.log(productName);
    }

    return (
        <>
            <div className='flex justify-between pt-20'>
                <div className='flex items-center space-x-3'>
                    <p className='uppercase font-semibold'>Bộ lọc: </p>
                    <Select defaultValue='Điện Thoại' className='font-semibold' >
                        {listBrand.map((item, index) => (
                            <Select.Option key={index} value={item} label={item} >
                                <Tag>{item}</Tag>
                            </Select.Option>
                        ))}
                    </Select>
                    <Select defaultValue='Thương Hiệu' className='font-semibold w-[124px] text-center' onChange={hanfleFilter}>
                        {listBrand.map((item, index) => (
                            <Select.Option key={index} value={item} label={item} >
                                <Tag>{item}</Tag>
                            </Select.Option>
                        ))}
                    </Select>
                    <Select defaultValue='Màu sắc' className='font-semibold w-[124px] text-center'>
                        {listBrand.map((item, index) => (
                            <Select.Option key={index} value={item} label={item} >
                                <Tag>{item}</Tag>
                            </Select.Option>
                        ))}
                    </Select>
                    <Select defaultValue='Rom' className='font-semibold w-[124px] text-center'>
                        {listBrand.map((item, index) => (
                            <Select.Option key={index} value={item} label={item} >
                                <Tag>{item}</Tag>
                            </Select.Option>
                        ))}
                    </Select>
                    <Select defaultValue='Ram' className='font-semibold w-[124px] text-center'>
                        {listBrand.map((item, index) => (
                            <Select.Option key={index} value={item} label={item} >
                                <Tag>{item}</Tag>
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>Sắp xếp theo: </p>
                    <Select defaultValue='Mới nhất' className='w-100px' >
                        <Select.Option value='new' label='new'>
                            <Tag>Mới nhất</Tag>
                        </Select.Option>
                        <Select.Option value='down' label='down'>
                            <Tag>Giá giảm dần</Tag>
                        </Select.Option>
                        <Select.Option value='up' label='up'>
                            <Tag>Giá tăng dần</Tag>
                        </Select.Option>
                    </Select>
                </div>

            </div>
            <div className='pt-12'>
                <ProductList products={products} />
            </div>
        </>
    );
};

export default UiFilter;