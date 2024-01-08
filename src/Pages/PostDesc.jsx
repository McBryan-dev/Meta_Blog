import React from 'react';

import PostData from '../assets/images/data/posts.js';
import '../styles/PostDesc.css'
import Badge from '../shared/Badge.jsx';

import {useParams} from 'react-router-dom';

const PostDesc = () => {

    const {id} = useParams()

    const post = PostData.find(post => post.id === id);

    const {author, para, photo, content, profile_photo, badge, date, } = post;

    return <>

        <div className="post_desc_area d-flex align-items-center justify-content-center flex-direction-column">

            <div className="content d-flex flex-direction-column align-items-center">

                <div className="profile">

                    <div className="short_info d-flex align-items-start flex-direction-column">
                        <div className="badge">
                            <Badge />
                        </div>
                        <div className="para">
                            <p>{para}</p>
                        </div>
                    </div>

                    <div className="author d-flex align-items-center">

                        <div className="author_name d-flex">
                            <img src={profile_photo} className="img-fluid" />
                            <h5>{author}</h5>
                        </div>

                        <div className="date d-flex">
                            <h5>{date}</h5>
                        </div>
                        
                    </div>

                </div>

                <div className="image d-flex">
                    <img src={photo} className="bg_image img-fluid" />
                </div>

                <div className="desc d-flex align-items-center justify-content-center flex-direction-column">
                    
                    <div className="desc_content">
                        <p>{content}</p>
                    </div>

                </div>

            </div>
            
        </div>

    </>
}

export default PostDesc;