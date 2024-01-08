import React, {useEffect, useRef, useState} from 'react';

//Imported Files
import './Header.css';
import SmallNavbar from '../../../../shared/SmallNavbar.jsx';
import DarkModeBtn from '../DarkMode/DarkMode.jsx';

//Imported Tools
import {NavLink, Link} from 'react-router-dom';

//Imported Images
import headerImg from '../../../../assets/images/HeaderImg.png';
import searchImg from '../../../../assets/images/search-outline.png';

const Header = () => {
    
    const headerRef = useRef(null);
    // const toggleRef = useRef(null);

    // const toggle = toggleRef.current

    // const [isActive, setIsActive] = useState(false)

    // const second_lineRef = useRef()

    // const toggleNavBar = () => {
    //     setIsActive(!isActive);
    // }


    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', ()=> {
            if(document.body.scrollTop >20 || document.documentElement >20) {
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc();

        return window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const nav_links = [
        {
            path: '/home',
            display: 'HOME'
        },
        {
            path: '/blog',
            display: 'BLOG'
        },
        {
            path: '/singlePost',
            display: 'SINGLE POST',
            
        },
        {
            path: '/pages',
            display: 'PAGES'
        },
        {
            path: '/contact',
            display: 'CONTACT'
        }
    ]

    return <>
        <div className="navbar d-flex justify-content-around align-items-center" ref={headerRef}>

            
            <Link to="/"><img src={headerImg} alt="Header Image" /></Link>

            <div className="nav_links d-flex gap-4 justify-content-center">
                {
                    nav_links.map((item, index) => (
                        <NavLink to={item.path} key={item.id + index} className={navClass=> navClass.isActive ? "active_link" : ''}>
                            {item.display}
                            {console.log(index)}
                        </NavLink>
                    ))
                }
            </div>

            <div className="search_input">
                <input type="text" placeholder="Search" />
                <img src={searchImg} />
            </div>

            <div className="search_img">
                <button>
                    <img src={searchImg} />
                </button>
            </div>

            <div className="rectangle">
                <DarkModeBtn />
            </div>
            
            
            <div className="small_screen_navbar" >
                {/* <div className={isActive ? 'turn_line_1' : 'line_1'}></div>
                <div className={isActive ? 'no_line' : 'line_2'} ></div>
                <div className={isActive ? 'turn_line_2' : 'line_3'}></div> */}
            
                {/* <div className={`line_1 ${isActive ? 'active' : ''}`}></div>
                <div className={`line_2 ${isActive ? 'active' : ''}`}></div>
                <div className={`line_3 ${isActive ? 'active' : ''}`}></div> */}
         
                <SmallNavbar />
            
            </div>

        </div>

    </>
}

export default Header; 