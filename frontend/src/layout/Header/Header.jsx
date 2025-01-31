import './Header.scss';

import Logo from '../../components/Logo/Logo';
import {NavMain} from '../../components/NavMain/NavMain';
import NavAuth from '../../components/NavAuth/NavAuth';

const Header = () => {
    return (
        <header className='app-header'>
            <Logo/>
            <nav className="app-header-navigate">
                <NavMain/>
                <NavAuth/>
            </nav>
        </header>
    )
};

export default Header;  