import react from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './auth/Login';
import User from './User';
import Dashboard from './Dashboard';


function MyApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/user' element={<User />} />
               
            </Routes>
        </BrowserRouter>
    );
}


ReactDom.createRoot(document.getElementById('app')).render(<MyApp />)