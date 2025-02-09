import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Blog from './pages/Blog/Blog';
import Portfolio from './pages/Portfolio/Portfolio';

const App = () => {

    const [widthWindow, setWidthWindow] = useState(
        (window.innerWidth<992)?(true):(false)
    );


    const updateWindowsSize = () => {
        if(window.innerWidth<992){
            setWidthWindow(true)
        }else{
            setWidthWindow(false)
        }
    };
    updateWindowsSize;

    useEffect(()=>{
        addEventListener('resize', updateWindowsSize)
    });
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout widthWindow={widthWindow}/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='/contacts' element={<ContactsPage/>}></Route>
                    <Route path='/blog' element={<Blog/>}></Route>
                    <Route path='/portfolio' element={<Portfolio/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
