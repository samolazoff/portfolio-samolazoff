import './BlogItem.scss';

import { Link } from 'react-router-dom';

const BlogItem = (props) => {

    const {id, date, title, txt} = props.post;

    return (
        <Link to={`/blog/${id}`} className='post-wrap'>
            <header className="post-header">
                <span>{date}</span>
            </header>
            <div className="post-content">
                <h4 className="post-title">
                    {title}
                </h4>
                <p className="post-txt">{txt}</p>
            </div>
        </Link>
    );
};

export default BlogItem;