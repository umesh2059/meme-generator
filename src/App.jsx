import React,{ useState } from 'react';
import{Routes,Route} from "react-router-dom";
import HomePage from "./pages/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return(
    <div className='Container'>
      <h1>meme generator</h1>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>

    </div>
  );
};
export default App;
