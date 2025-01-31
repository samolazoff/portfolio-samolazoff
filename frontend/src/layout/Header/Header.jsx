import './Header.scss';

import Logo from '../../components/Logo/Logo';

const Header = () => {
    return (
        <header className='app-header'>
            <Logo/>
            <nav className="app-header-navigate">
                nav
            </nav>
        </header>
    )
};

export default Header;  