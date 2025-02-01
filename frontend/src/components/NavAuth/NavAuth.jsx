import './NavAuth.scss';

import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const NavAuth = () => {
    const data = useSelector((state) => state.language.navAuth);
    
    return (
        <ul className='nav-auth'>
            <li className="nav-auth-item nav-auth-item_up" >
                <NavLink to='/auth'>{data[0].title}</NavLink>
            </li>
            <li className="nav-auth-item  nav-auth-item_in">
                <NavLink to='login'>{data[1].title}</NavLink>
            </li>
            
        </ul>
    );
};

export default NavAuth;