import React, {useState} from 'react';

import './SmallNavbar.css';
import App from '../App.js';
import Layout from '../components/property/Header/Layout/Layout.jsx';

const SmallNavbar = () => {

    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive)
    }

    return <>

        <div className="small_navbar" onClick={toggle}>

            <div className={`line_1 ${isActive ? 'active' : ''}`}></div>
            <div className={`line_2 ${isActive ? 'active' : ''}`}></div>
            <div className={`line_3 ${isActive ? 'active' : ''}`}></div>

        </div>

    </>

}

export default SmallNavbar;