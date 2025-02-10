import './Blog.scss';

import BlogItem from '../../components/BlogItem/BlogItem';

import dataPosts from '../../data/blog.json';

const Blog = () => {
    const {posts} =dataPosts;
    return (
        <section className='app-blog'>
            <h2 className="title-box">Blog</h2>
            <ul className="app-blog-items">
                {
                    posts.map((post, index) => (
                        <li key={index}>
                            <BlogItem post={post}></BlogItem>
                        </li>
                    ))
                }
            </ul>
            
        </section>
    );
};

export default Blog;