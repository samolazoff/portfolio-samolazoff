import './Logo.scss';
import {Link} from 'react-router-dom';

const Logo = () => {
    return (
        <h1 className='logo'>
            {<Link to={'/'}>Samolazoff</Link>}
        </h1>
    );
};

export default Logo;