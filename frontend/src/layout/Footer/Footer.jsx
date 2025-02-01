import './Footer.scss';

import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='app-footer'>
            <Link to='https://github.com/samolazoff'>©2025 Samolazoff, Inc.</Link>
        </footer>
    );
};

export default Footer;