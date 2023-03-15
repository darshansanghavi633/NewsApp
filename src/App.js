import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {Route, BrowserRouter, Routes } from 'react-router-dom';

const App =()=> {
   let apiKey=process.env.REACT_APP_NEWS_API;
    return (
          //eslint-disable-next-line
          <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<News pageSize={5} apiKey={apiKey} country="in" category="general"/>}></Route>
        </Routes>
        <Routes>
          <Route path="/business" element={<News pageSize={5} apiKey={apiKey} country="in" category="business"/>}></Route>
        </Routes>
        <Routes>
          <Route path="/entertainment" element={<News pageSize={5} apiKey={apiKey} country="in" category="entertainment"/>}></Route>
        </Routes>
        <Routes>
          <Route path="/general" element={<News  pageSize={5} apiKey={apiKey} country="in" category="general"/>}></Route>
        </Routes>
        <Routes>
          <Route path="/science" element={<News  pageSize={5} apiKey={apiKey} country="in" category="science"/>}></Route>
        </Routes>
        <Routes>
          <Route path="/sports" element={<News  pageSize={5} apiKey={apiKey}  country="in" category="sports"/>}></Route>
        </Routes>
        <Routes>
          <Route path="/health" element={<News pageSize={5} apiKey={apiKey} country="in" category="health"/>}></Route>
        </Routes>
        <Routes>
          <Route path="/technology" element={<News  pageSize={5} apiKey={apiKey} country="in" category="technology"/>}></Route>
        </Routes>
        <Routes>
          <Route path="*" element={<p></p>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    //eslint-disable-next-line
    )
  }
export default App

