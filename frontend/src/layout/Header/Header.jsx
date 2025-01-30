import './Header.scss';

import Logo from '../../components/Logo/Logo';

const Header = () => {
    return (
        <header className='app-header'>
            <Logo/>
            <span>Nave</span>
        </header>
    )
};

export default Header;  