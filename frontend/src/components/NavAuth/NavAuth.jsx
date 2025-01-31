import './NavAuth.scss';

import {NavLink} from 'react-router-dom';

const NavAuth = () => {
    return (
        <ul className='nav-auth'>
            <li className="nav-auth-item nav-auth-item_up" >
                <NavLink to='/auth'>Sign Up</NavLink>
            </li>
            <li className="nav-auth-item  nav-auth-item_in">
                <NavLink to='login'>Log in</NavLink>
            </li>
            
        </ul>
    );
};

export default NavAuth;