import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import './App.css';

const App = () => {

  const a = 2

  React.useEffect(()=>{
    console.log("set by useEffect and deps emty")
  },[])

  React.useLayoutEffect(()=>{
    console.log("set by useLayoutEffect and deps emty")
  },[])

  React.useEffect(()=>{
    console.log("set by useEffect and deps a")
  },[a])

  React.useEffect(()=>{
    console.log("set by useEffect and deps none")
  })


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
