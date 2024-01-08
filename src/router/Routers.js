import React from 'react';

import {Navigate, Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home.jsx';
import Blog from '../Pages/Blog.jsx';
import SinglePost from '../Pages/SinglePost.jsx';
import Pages from '../Pages/Pages.jsx';
import Contact from '../Pages/Contact.jsx';
import AllPosts from '../Pages/AllPosts.jsx'; 
import PostDesc from '../Pages/PostDesc.jsx';

const Routers = ({isActive}) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to= "/home/" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/singlePost" element={<SinglePost />} />
            <Route path="/postCard/:id" element={<PostDesc />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/allPosts" element={<AllPosts />} />

        </Routes>
    )
}

export default Routers;