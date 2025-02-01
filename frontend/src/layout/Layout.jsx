import './Layout.scss';

import {Outlet} from 'react-router-dom';

import Header from './Header/Header';

const Layout = (props) => {
    const {widthWindow} = props;
    return(
        <>
        <Header widthWindow={widthWindow}/>
            <main className='app-main'>
                <Outlet/>
            </main>
        </>
    )
};

export default Layout;