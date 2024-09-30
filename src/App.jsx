import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';

function App() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sucess" element={<Success/>}/>
            <Route path="/*" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
}

export default App