import React from 'react';
import logo from './assets/image1.png';
// @ts-ignore
import videobg from "./assets/background_video.mp4";
import './App.css';


function App() {
  return (
    <div className="App">
        <div className='content'>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>Dragon Tribe</h1>
            <p>Join the Dragon tribe and ignite your path to greatness</p>
        </div>
        <video src={videobg} autoPlay loop muted />
    </div>
  );
}

export default App;
