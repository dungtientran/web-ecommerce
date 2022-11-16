import React from 'react';
import Routers from '../../router/Routers';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SideCart from '../sidecart/SideCart';

const Layout = () => {
    return (
        <>
            <Header/>
            <SideCart />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    );
};

export default Layout;