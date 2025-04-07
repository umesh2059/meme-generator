
import React, { useEffect,useState } from "react";
import MemeCard from "../components/card";  
import { getAllMemes } from "../Api/memes";
const Homepage = () => {
   const [Data,setData]=useState([]);
     useEffect(()=>{
     getAllMemes().then((memes)=>setData(memes.data.memes))
    },[]);
    return (
    
        <div className="row">
           {Data.map((el)=>(
            <MemeCard img={el.url} title={el.name}/>
           ))}
        </div>
        
    );
};
export default Homepage;
