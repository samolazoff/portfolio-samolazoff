import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router';
import {Outlet} from 'react-router-dom';

import Layout from './layout/Layout';


const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Outlet/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
