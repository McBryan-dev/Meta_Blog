import React from 'react';

import {useState} from 'react';

//Imported Tools
import {Link} from 'react-router-dom';

//Imported Files
import '../styles/Home.css';
import Header from '../components/property/Header/Header/Header.jsx';
import Badge from '../shared/Badge.jsx';
import Advert from '../shared/Advert.jsx';
import PostCard from '../shared/PostCard.jsx';
import SmallNavbar from '../shared/SmallNavbar.jsx';

//Imported Images
import HomeImg from './../assets/images/home_image.png';
import MainCardProfileImg from './../assets/images/main_card_profile_img.png'

const Home = ({isActive}) => {

    const altText = 'Image';

    return <>
        <div className={` ${isActive ? 'first_scroll' : ''}`}></div>
        
        <div className="home_area d-flex align-items-center flex-direction-column ">

            <div className="home_area_content">
                <img src={HomeImg} alt={altText} className="home_img img-fluid" />

                <div className="main_area">
                    <div className="main_card d-flex align-items-start flex-direction-column ">

                        <Badge />

                        <div className="p">
                            <p className="fs-4 fw-600">
                                The Impact of Technology on the Workplace: How <br /> Technology is Changing
                            </p>
                        </div>

                        <div className="profile d-flex">
                            <img src={MainCardProfileImg} alt={altText} />

                            <h6>Jason Francisco</h6>

                            <h6>August 20, 2022</h6>
                        </div>

                    </div>
                </div>

                <div className="advert d-flex justify-content-center align-items-center">
                    <Advert />
                </div>

                <div className="home_post">

                    <div className="post_head">
                        <h3>Latest Post</h3>
                        <div className="underline">
                            <hr />
                        </div>
                    </div>

                    <div className="post_card">
                        <PostCard />
                    </div>

                    <div className="link">
                            <Link to="/allPosts">View All Post</Link>
                        </div>
                        
                </div>

            </div>

            <div className="advert d-flex justify-content-center align-items-center flex-direction-column">
                    <Advert />
            </div>
            
        </div>


    </>

}

export default Home;