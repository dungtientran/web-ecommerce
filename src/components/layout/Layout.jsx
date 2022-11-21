
import React from 'react';
import Routers from '../../router/Routers';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SideCart from '../sidecart/SideCart';
import ContactBanner from '../UI/ContactBanner'
const Layout = () => {
    return (
        <>
            <Header/>
            <SideCart />
            <div>
                <Routers />
            </div>
            <ContactBanner />
            <Footer />
        </>
    );
};

export default Layout;