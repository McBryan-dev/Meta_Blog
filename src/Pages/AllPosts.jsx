import React from 'react';

import '../styles/AllPosts.css';
import PostCard from '../shared/PostCard.jsx';
import PostData from '../assets/images/data/posts.js';

import FacebookLogo from '../assets/images/facebook_logo.png';
import TwitterLogo from '../assets/images/twitter_logo.png';
import InstaLogo from '../assets/images/insta_logo.png';
import YoutubeLogo from '../assets/images/youtube_logo.png';

import AuthorImg from '../assets/images/main_card_profile_img.png';

const AllPosts = () => {
    return <>
        <div className="allpost_area d-flex align-items-center justify-content-center flex-direction-column">
            
            <div className="allpost_area_content flex-direction-column">

                <div className="author_info d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="content d-flex align-items-center">

                        <div className="author_name d-flex align-items-center">
                            <img src={AuthorImg} />
                            
                            <div className="text">
                                <h2>Jonathan Doe</h2>
                                <h5>Collaborator & Editor</h5>
                            </div>
                        </div>

                        <div className="para">
                            <p>
                                Meet Jonathan Doe, a passionate writer and blogger with a love for technology 
                                and travel. Jonathan holds a degree in Computer Science and 
                                has spent years working in the tech industry,
                                gaining a deep understanding of the impact technology has on our lives.
                            </p>
                        </div>

                        <div className="buttons d-flex align-items-center">
                            
                            <button className="facebook">
                                <img src={FacebookLogo} />
                            </button>

                            <button className="twitter">
                                <img src={TwitterLogo} />
                            </button>

                            <button className="insta">
                                <img src={InstaLogo} />
                            </button>

                            <button className="youtube">
                                <img src={YoutubeLogo} />
                            </button>

                        </div>

                    </div>
                </div>

                <div className="allposts">

                    <div className="post_head">
                        <h3>Latest Post</h3>
                    </div>

                    <div className="post_card">
                        <PostCard />
                    </div>   

                </div>

            </div>

        </div>
    </>
}

export default AllPosts;