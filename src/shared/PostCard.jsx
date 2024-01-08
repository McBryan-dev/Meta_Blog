import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

import './PostCard.css';
import PostData from '../assets/images/data/posts.js';

const PostCard = ({post}) => {

    return <Container>
        <Row>
            <Col lg="12">
                <div className="posts_area">
                    {
                        PostData?.map(post => (

                            <div className="card d-flex flex-direction-column justify-content-center p-3" key={post.id}>
                                <Link to={`/postCard/${post.id}`}>

                                    <div className="image">
                                        <img src={post.photo} className="image img-fluid" />
                                    </div>

                                    <div className="content">

                                        <div className="card_texts d-flex align-items-start flex-direction-column p-1">
                                            <div className="badge d-flex justify-content-center">
                                                <h3>{post.badge}</h3>
                                            </div>
                                            <p>{post.para}</p>
                                        </div>

                                        <div className="short_info d-flex">

                                            <div className="profile_info d-flex">
                                                <img src={post.profile_photo} className="info_image" />
                                                <h3 className="author">{post.author}</h3>
                                            </div>

                                            <h4 className="date_text">{post.date}</h4>

                                        </div>

                                    </div>

                                </Link>

                            </div>

                        ))
                    }
                </div>
            </Col>
        </Row>
    </Container>
}

export default PostCard;