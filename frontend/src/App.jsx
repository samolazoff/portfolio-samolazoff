import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router';


const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
