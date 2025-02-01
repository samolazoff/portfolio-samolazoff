import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import { useState, useEffect } from 'react';


import Layout from './layout/Layout';


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
                    <Route index element={<Outlet/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
