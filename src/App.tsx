import React from 'react';
import './App.scss';
import {About, Footer, Header, Skills, Work} from "./container";
import {Navbar} from "./components";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Navbar/>
            
            {/*<Routes>*/}
            <Header/>
            {/*    <Route path='/home' element={<Header/>}/>*/}
            {/*    <Route path='/about' element={<About/>}/>*/}
            {/*    <Route path='/work' element={<Work/>}/>*/}
            {/*    <Route path='/skills' element={<Skills/>}/>*/}
            {/*    <Route path='/contact' element={<Footer/>}/>*/}
            <About/>
            <Work/>
            <Skills/>
            <Footer/>
            {/*</Routes>*/}
        </div>
    );
}

export default App;
