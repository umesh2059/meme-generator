import React,{ useState } from 'react';
import{Routes,Route,BrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home"
import EditPage from "./pages/edit"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return(
    <div className='Container'>
      <h1>meme generator</h1>
      
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Edit/" element={<EditPage/>}/>
        </Routes>
    </div>
  );
};
export default App;
