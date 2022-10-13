import React from 'react'
import './App.css';
import Header from './components/Header.js'
import List from './components/List';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Search/>
      <List/>
    </div>
  );
}

export default App;
