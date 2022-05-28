import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { useAppSelector } from './store/hooks/redux';

function App() {
  const { liked } = useAppSelector((state) => state.likedReducer);

  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
