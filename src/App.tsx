import React from 'react';
import './App.css';
import { CatsCard } from './components/CatsCard/CatsCard';

function App() {
  return (
    <div className='App'>
      <CatsCard />
      <CatsCard />
    </div>
  );
}

export default App;
