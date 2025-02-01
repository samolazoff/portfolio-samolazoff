import './Header.scss';

import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';

import Logo from '../../components/Logo/Logo';
import {NavMain} from '../../components/NavMain/NavMain';
import NavAuth from '../../components/NavAuth/NavAuth';

const Header = (props) => {
   
    const {widthWindow} = props;
    const [isOpen, setOpen] = useState(false);

    const listClassNavigation = () => {
        if(!widthWindow){
            return ('app-header-navigate')
        }else{
            return ('app-header-navigate d-none')
        }
    };
    const [navClass, setNavClass] = useState(listClassNavigation());

    return (
        <header className='app-header'>
            <Logo/>
            <nav className={navClass}>
                <NavMain widthWindow={widthWindow}/>
                <NavAuth widthWindow={widthWindow}/>
            </nav>
            {
                widthWindow && <Hamburger
                                    color ='#4A90E2'
                                    toggled={isOpen} 
                                    toggle={setOpen} 
                                    onToggle={
                                        toggled => {
                                            if (toggled) {
                                                setNavClass('app-header-navigate app-header-navigate_small')
                                            } else {
                                                setNavClass('app-header-navigate d-none')
                                            }
                                        }
                                    }
                                />
            }
        </header>
    )
};

export default Header;  