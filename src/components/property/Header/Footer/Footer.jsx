import React from 'react';

import './Footer.css';

import {Link} from 'react-router-dom';

import MailImg from '../../../../assets/images/mail_img.png'
import FooterImg from '../../../../assets/images/footer_img.png'

const Footer = () => {

    const link_list = [
        {
            path: '/home',
            display: 'Home'
        },
        {
            path: '/singlePost',
            display: 'About'
        },
        {
            path: '/blog',
            display: 'Blog' 
        },
        {
            path: '/',
            display: 'Archived' 
        },
        {
            path: '/allPosts',
            display: 'Author'
        },
        {
            path: '/',
            display: 'Contact' 
        },
    ]

    return <>

        <div className="footer">

            <div className="section_one">

                <div className="info">
                    
                    <div className="info_about">
                        <h3>About</h3>
                        <div className="desc">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                    </div>

                    <div className="info_contact">
                        <span>
                            <h4>Email:</h4>
                            <h6> bryanokononfua@gmail.com</h6>
                        </span>

                        <span>
                            <h4>Phone:</h4>
                            <h6>09159599841</h6>
                        </span>
                    </div>

                </div>

                <div className="links">

                    <div className="nav_link">
                        <h3>Quick Link</h3>

                        <div className="link_list">
                            {
                                link_list?.map((item, index) => (
                                    <div className="link" key={item.id + index}>
                                        <Link to={item.path}>
                                            <h5>{item.display}</h5>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="cag_links">
                        <h3>Category</h3>

                        <div className="cag_link_list">
                            <h5>Lifestyle</h5>
                            <h5>Technology</h5>
                            <h5>Travel</h5>
                            <h5>Business</h5>
                            <h5>Economy</h5>
                            <h5>Sports</h5>
                        </div>
                    </div>

                </div>

                <div className="newsletter">

                    <div className="heading">
                        <h4>Weekly Newsletter</h4>
                        <p>Get blog articles and offers via email</p>
                    </div>

                    <div className="sub_input">
                        <div className="input">
                            <input type="email" placeholder="Your Email" />
                            <img src={MailImg} alt="image" />
                        </div>

                        <div className="sub_button">
                            <h6>Subscribe</h6>
                        </div>
                    </div>

                </div>

            </div>

            <div className="section_two">

                <div className="copy_info">
                    <img src={FooterImg} alt="image" />

                    <div className="text">
                        <span>
                            <h5>Meta</h5><h4>Blog</h4>
                        </span>
                        <p>© <span>JS Template</span>2023. All Rights Reserved.</p>                                
                    </div>
                </div>

                <div className="copy_body">
                    <h5>Terms of Use</h5>
                    <div className="divider"></div>
                    <h5>Privacy Policy</h5>
                    <div className="divider"></div>
                    <h5>Cookie Policy</h5>
                </div>
                
            </div>

        </div>

    </>
}

export default Footer;