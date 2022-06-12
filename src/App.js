import './App.css';
import React,{ Suspense,lazy } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route,Routes } from "react-router-dom";

const Home = lazy(()=>import('./pages/Home'))
const History = lazy(()=>import('./pages/History'))
const About = lazy(()=>import('./pages/About'))

function App() {
  return (
    <div className='App'>
      <Header/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
