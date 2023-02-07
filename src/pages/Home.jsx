
import React from 'react';
import banner from '../assets/image/herobanner.png';
import SubNav from '../components/subnav/SubNav';
import { useEffect } from 'react';
import { useState } from 'react';
import BuyFast from '../components/UI/BuyFast';
import ProductList from '../components/UI/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, getAllProducsts } from '../redux/slice/productsSlice';

const Home = () => {
    const [hotProduct, sethottProduct] = useState([]);
    const [iphone, setIphone] = useState([]);
    const [mouse, setMouse] = useState([]);
    const [laptop, setLaptop] = useState([]);
    const [keyBoard, setKeyBoard] = useState([]);
    const listProduct = useSelector(state => state.products?.allproducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducsts())
        dispatch(getAllCategories())
    }, [dispatch])
    useEffect(() => {
        const fillterIphone = listProduct.filter((item) => item.categoryId.categoryName.toLowerCase() === 'điện thoại').slice(0, 8);
        const fillterMouse = listProduct.filter((item) => item.categoryId.categoryName.toLowerCase() === 'chuột');
        const fillterLaptop = listProduct.filter((item) => item.categoryId.categoryName.toLowerCase() === 'laptop');
        const fillterIpad = listProduct.filter((item) => item.categoryId.categoryName.toLowerCase() === 'keyboard');
        const hotProducts = listProduct.slice(0, 8);
        sethottProduct(hotProducts);
        setIphone(fillterIphone);
        setMouse(fillterMouse);
        setLaptop(fillterLaptop);
        setKeyBoard(fillterIpad);
    }, [listProduct]);

    return (
        <>
            <div>
                <img src={banner} alt="banner" />
            </div>
            <SubNav />
            <section className='p-10'>
                <h1 className='lg:text-3xl font-semibold mt-24 mb-6 md:text-2xl'>SẢN PHẨM HOT</h1>
                <ProductList products={hotProduct} />
            </section>
            <section className='p-10'>
                <h1 className='lg:text-3xl font-semibold mt-24 mb-6 md:text-2xl'>KEYBOARD</h1>
                <ProductList products={keyBoard} />
            </section>
            <section className='p-10'>
                <h1 className='lg:text-3xl font-semibold mt-24 mb-6 md:text-2xl'>ĐIỆN THOẠI</h1>
                <ProductList products={iphone} />
            </section>
            <section className='p-10'>
                <h1 className='lg:text-3xl font-semibold mt-24 mb-6 md:text-2xl'>LAPTOP</h1>
                <ProductList products={laptop} />
            </section>
            <section className='p-10'>
                <h1 className='lg:text-3xl font-semibold mt-24 mb-6 md:text-2xl'>CHUỘT</h1>
                <ProductList products={mouse} />
            </section>
            <BuyFast />
        </>
    );
};

export default Home;
