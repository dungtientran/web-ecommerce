
import React, { useEffect, useState } from 'react';
import ProductList from '../UI/ProductList';
import { useSelector } from 'react-redux';
import { Select } from 'antd';
import Paginations from '../pagination/Paginations';

const UiFilter = ({ productName }) => {
    const searchText = useSelector(state => state.searchtext.searchText )
    const listProducts = JSON.parse(localStorage.getItem('ALL_PRODUCTS'));
    const brand = listProducts.map(item => item.brand);
    const listBrand = [...new Set(brand)];
    const [listProductUi, setListProductUi] = useState(listProducts);
    const [selectedCategories, setSelectedCategories] = useState(productName);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [currentPage, setCurrenPage] = useState(1);
    const [postPage, setPostPage]= useState(8);
    const categoreis = JSON.parse(localStorage.getItem('ALL_CATEGORIES_NAME'))
    const categoreisName = categoreis.map(item => item.categoryName);

    const filter = () => {
        let updateListProduct = listProducts;
        if (selectedCategories) {
            updateListProduct = updateListProduct.filter(item => item.categoryId.categoryName.toLowerCase() === selectedCategories.toLowerCase())
        }
        if (selectedBrand) {
            updateListProduct = updateListProduct.filter(item => item.brand.toLowerCase() === selectedBrand.toLowerCase())
        }
        if(searchText) {
            updateListProduct = updateListProduct.filter(item => item.productName.toLowerCase().includes(searchText.toLowerCase()))
        }
        setListProductUi(updateListProduct)
    }
    useEffect(() => {
        filter()
    }, [selectedBrand, selectedCategories,searchText]);

    const lastPost = currentPage * postPage;
    const firstPost = lastPost - postPage;
    const currentPost = listProductUi.slice(firstPost, lastPost);
    const paginate = (pageNumber) => setCurrenPage(pageNumber);
    console.log(currentPost);
    return (
        <>
            <div className='flex justify-between pt-20'>
                <div className='flex items-center space-x-3'>
                    <p className='uppercase font-semibold'>Bộ lọc: </p>
                    <Select defaultValue='Sản Phẩm' className='font-semibold w-[124px] text-center' onChange={(value) => setSelectedCategories(value)}>
                        {categoreisName?.map((item, index) => (
                            <Select.Option key={index} value={item} label={item} />
                        ))}
                    </Select>
                    <Select defaultValue='Thương Hiệu' className='font-semibold w-[124px] text-center' onChange={(value) => setSelectedBrand(value)}>
                        {listBrand.map((item, index) => (
                            <Select.Option key={index} value={item} label={item} />
                        ))}
                    </Select>
                </div>
            </div>
            <div className='pt-12'>
            {listProductUi.length > 0 ? (
                    <>
                        <ProductList products={currentPost} />
                        <Paginations postPage={postPage} totalPost={listProductUi.length} paginate={paginate} />
                    </>
                ) : (
                    <div className='text-2xl uppercase font-semibold text-gray-500 p-2 text-center h-screen'>Không có sản phẩm</div>
                )}
            </div>

        </>
    );
};

export default UiFilter;