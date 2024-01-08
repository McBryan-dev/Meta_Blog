import React from 'react';
import './Layout.css'

import Header from '../Header/Header.jsx';
import Routers from '../../../../router/Routers.js';
import Footer from '../Footer/Footer.jsx';


const Layout = () => {
    return <>
        <div>
            <Header />
            <Routers />
            <Footer />
        </div>
    </>
}

export default Layout;