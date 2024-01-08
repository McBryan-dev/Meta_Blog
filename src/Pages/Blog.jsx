import React from 'react';

import {Link} from 'react-router-dom';

import BodyImg from '../assets/images/home_image.png';
import ProfileImg from '../assets/images/blog_profile_img.png'

import Badge from '../shared/Badge.jsx';
import PostCard from '../shared/PostCard.jsx';
import Advert from '../shared/Advert.jsx';

import '../styles/Blog.css'

const Blog = () => {
    return <>
        <div className="blog_area d-flex align-items-center justify-content-center flex-direction-column">          

                <div className="blog_area_content">

                    <div className="blog_head d-flex flex-direction-column">

                        <div className="blog_head_content">
                            <div className="title d-flex flex-direction-column">
                                <h2>Blog Listing</h2>
                            </div>
                            <div className="links d-flex flex-direction-column">
                                    <h6 className="link_zero">
                                        <Link to="/home">Home</Link>
                                    </h6>
                                    <div className="divider d-flex"> </div>
                                    <h6 className="link_one">
                                        <Link>Link One</Link>
                                    </h6>
                            </div>
                        </div>

                    </div>

                    <div className="blog_body d-flex align-items-center flex-direction-column">

                        <div className="content">

                            <img src={BodyImg} className="image" />

                            <div className="info d-flex align-items-start flex-direction-column">

                                <div className="title">
                                    <div className="badge">
                                        <Badge />
                                    </div>

                                    <div className="text">
                                        <p> The Impact of Technology on the Workplace: How Technology is Changing </p>
                                    </div>
                                </div>

                                <div className="profile d-flex">

                                    <div className="short_info d-flex">
                                        <img src={ProfileImg} />
                                        <div className="four">
                                            <h4>Tracey Wilson</h4>
                                        </div>
                                    </div>

                                    <div className="date">
                                        <h4>August 20, 2022</h4>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="home_post">

                        <div className="post_card">
                            <PostCard />
                        </div>

                        <div className="link">
                            <Link to="/allPosts">View All Post</Link>
                        </div>

                    </div>

                </div>

                <div className="advert d-flex align-items-center justify-content-center">
                    <Advert />
                </div>

        </div>
    </>
}

export default Blog;