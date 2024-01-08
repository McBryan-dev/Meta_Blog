import React from 'react';

import ProfileImg from '../assets/images/single_post_profile_img.png';
import BodyImg0 from '../assets/images/single_post_body_img_0.png';
import BodyImg1 from '../assets/images/single_post_body_img_1.png';
import TextData_0 from '../assets/images/data/texts_1.js';
import TextData1 from '../assets/images/data/texts_2.js';

import '../styles/SinglePost.css';
import Badge from '../shared/Badge.jsx';
import Advert from '../shared/Advert.jsx'


const SinglePost = () => {

 return <>
    
    <div className="single_post_area d-flex align-items-center justify-content-center flex-direction-column">
        <div className="content d-flex align-items-center flex-direction-column">

            <div className="info">

                <div className="profile d-flex align-items-start flex-direction-column">

                    <div className="badge">
                        <Badge />
                    </div>
                    <div className="para">
                        <p>The Impact of Technology on the Workplace: How Technology is Changing</p>
                    </div>

                </div>

                <div className="author_info d-flex align-items-center">

                    <div className="author">
                        <img src={ProfileImg} />
                        <h5>Tracey Wilson</h5>
                    </div>

                    <div className="date">
                        <h5>August 20, 2022</h5>
                    </div>

                </div>

            </div>

            <div className="body_image_0">
                <img src={BodyImg0} className="img-fluid" />
            </div>

            <div className="f_article">
                <p>
                Traveling is an enriching experience that opens up new horizons, exposes us to 
                different cultures, and creates memories that last a lifetime. However, traveling can also 
                be stressful and overwhelming, especially if you don't plan and prepare adequately. 
                In this blog article, we'll explore tips and tricks for a memorable journey and how 
                to make the most of your travels. 
                <br />
                <br />
                One of the most rewarding aspects of traveling is 
                immersing yourself in the local culture and customs. This includes trying local cuisine, 
                attending cultural events and festivals, and interacting with locals. Learning a few phrases 
                in the local language can also go a long way in making connections and showing respect.
                </p>
            </div>

            <div className="main_article d-flex flex-direction-column align-items-start">
                {
                    TextData_0?.map(text => (
                        <div className="data d-flex flex-direction-column" key={text.id}>

                            <div className="title">
                                <h3>{text.title}</h3>
                            </div>
                            <div className="body">
                                <p>{text.article}</p>
                            </div>

                        </div>
                    ))
                }
            </div>

            <div className="quote">
                <p>“ Traveling can expose you to new environments and potential health risks, 
                    so it's crucial to take precautions to stay safe and healthy. ”
                </p>
            </div>

            <div classame="body_image_1">
                <img src={BodyImg1} className="img-fluid" />
            </div>

            <div className="advert">
                <Advert />
            </div>

            <div className="main_article d-flex align-items-start flex-direction-column">
                {
                    TextData1?.map(text => (
                        <div className="data" key={text.id}>

                            <div className="title">
                                <h3>{text.title}</h3>
                            </div>
                            <div className="body">
                                <p>{text.article}</p>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    </div>

 </>
 
}

export default SinglePost;