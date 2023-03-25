import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Profile from './Components/Emergency';
import Contact from './Components/Contact';
import Head from './Components/Head';
import Foot from './Components/Foot';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
/* import ProductDetail from './Components/ProductDetail';
import ShowMessage from './Components/ShowMessage';
import ColorState from './Components/ColorState';
import EffectHookCheck from './Components/EffectHookCheck';
import AllPosts from './Components/AllPosts'; */
import APIDoctors from './Components/APIDoctor';
import Axiopostcreateusers from './Components/Axiopostcreateuser';
import Axioscreates from './Components/Axioscreate';
import Emergency from './Components/Emergency';
import DoctorList from './Components/Home';
/* 
import Login from './Components/Login';
import LogOut from './Components/LogOut'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Head/>
      <Routes>
      <Route exact path='/' element={<DoctorList/>} />
      <Route exact path='/emergency' element={<emergency />} />
      <Route exact path='/contact' element={<Contact />} />
      {/* <Route exact path='/product/:id' element={<ProductDetail/>} />
      <Route exact path='/message' element={<ShowMessage/>} />
      <Route exact path='/color' element={<ColorState/>} />
      <Route exact path='/effect' element={<EffectHookCheck/>} />
      <Route exact path='/posts' element={<AllPosts/>} />
      <Route exact path='/login' element={<Login/>} /> */}
      <Route exact path='/doctors' element={<APIDoctors/>} />
      <Route exact path='/create' element={<Axiopostcreateusers/>} />
      <Route exact path='/Add' element={<Axioscreates/>} />
      {/* <Route exact path='/logout' element={<LogOut/>} /> */}
      </Routes>
      <Foot/>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
