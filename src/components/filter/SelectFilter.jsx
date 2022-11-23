import { Select, Tag } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterBrand, selectFilterName } from '../../redux/slice/filterselectionSlice';

const SelectFilter = ({listBrand}) => {
    const categoreis = useSelector(state => state.allcategoreis.allCategories);
    const categoreisName = categoreis.map(item => item.categoryName);
    const dispatch = useDispatch()
    return (
        <div className='flex justify-between w-full'>
            <div className='flex items-center space-x-3'>
                <p className='uppercase font-semibold'>Bộ lọc: </p>
                <Select defaultValue='Điện Thoại' className='font-semibold w-[124px] text-center' onChange={(value) => dispatch(selectFilterName(value))}>
                    {categoreisName?.map((item, index) => (
                        <Select.Option key={index} value={item} label={item} />
                    ))}
                </Select>
                <Select defaultValue='Thương Hiệu' className='font-semibold w-[124px] text-center' onChange={(value) => dispatch(selectFilterBrand(value))}>
                    {listBrand.map((item, index) => (
                        <Select.Option key={index} value={item} label={item} />
                    ))}
                </Select>
                <Select defaultValue='Màu sắc' className='font-semibold w-[124px] text-center'>
                    {listBrand.map((item, index) => (
                        <Select.Option key={index} value={item} label={item} />
                    ))}
                </Select>
                <Select defaultValue='Rom' className='font-semibold w-[124px] text-center'>
                    {listBrand.map((item, index) => (
                        <Select.Option key={index} value={item} label={item} />

                    ))}
                </Select>
                <Select defaultValue='Ram' className='font-semibold w-[124px] text-center'>
                    {listBrand.map((item, index) => (
                        <Select.Option key={index} value={item} label={item} />
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
    );
};

export default SelectFilter;