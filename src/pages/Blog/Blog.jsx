import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BlogCards from '../../components/BlogCards/BlogCards';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BlogCards></BlogCards>
            <Footer></Footer>
        </div>
    );
};

export default Blog;