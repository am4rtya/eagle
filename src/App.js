import React from 'react'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import MainBody from './Components/MainBody/MainBody';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <SideBar/>
      <MainBody/>
    </div>
  );
}

export default App;
