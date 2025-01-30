import './Layout.scss';

import {Outlet} from 'react-router-dom';

import Header from './Header/Header';

const Layout = () => {
    return(
        <>
        <Header/>
            <main className='app-main'>
                <Outlet/>
            </main>
        </>
    )
};

export default Layout;