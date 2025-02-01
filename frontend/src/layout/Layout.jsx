import './Layout.scss';

import {Outlet} from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = (props) => {
    const {widthWindow} = props;
    return(
        <>
            <Header widthWindow={widthWindow}/>
            <main className='app-main'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
};

export default Layout;