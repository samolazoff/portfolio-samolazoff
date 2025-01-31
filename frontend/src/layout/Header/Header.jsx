import './Header.scss';

import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';

import Logo from '../../components/Logo/Logo';
import {NavMain} from '../../components/NavMain/NavMain';
import NavAuth from '../../components/NavAuth/NavAuth';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [isBurger, setBurger] = useState(false);


    const updateWindowsSize = () => {
        if(window.innerWidth<992){
            setBurger(true)
        }else{
            setBurger(false)
        }
    };

    useEffect(()=>{
        addEventListener('resize', updateWindowsSize)
    });
    
    return (
        <header className='app-header'>
            <Logo/>
            
            
            <nav className="app-header-navigate">
                <NavMain/>
                <NavAuth/>
            </nav>
            {isBurger&& <Hamburger toggled={isOpen} toggle={setOpen} />}
        </header>
    )
};

export default Header;  