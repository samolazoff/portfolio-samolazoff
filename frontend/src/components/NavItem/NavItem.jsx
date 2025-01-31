import './NavItem.scss';

import {NavLink} from 'react-router-dom';

const NavItem = (props) => {

    const {title, path} = props;
    
    return (
        <li className='nav-item'>
            <NavLink 
                to={`/${path}`}
                className = {
                    ({ isActive }) =>(isActive ? "active" : "")
                }
                >{title}
            </NavLink>
        </li>
    );
};

export default NavItem;