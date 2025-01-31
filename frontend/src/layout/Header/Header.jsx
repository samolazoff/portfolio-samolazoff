import './Header.scss';

import Logo from '../../components/Logo/Logo';
import {NavMain} from '../../components/NavMain/NavMain';

const Header = () => {
    return (
        <header className='app-header'>
            <Logo/>
            <nav className="app-header-navigate">
                <NavMain/>
            </nav>
        </header>
    )
};

export default Header;  