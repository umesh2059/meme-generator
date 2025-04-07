import React,{useState} from "react"
import Text from "../components/text";
import {useSearchParams} from "react-router-dom";
const  EditPage=()=>{
    const [params]=useSearchParams();
    const[count,setCount]=useState(0);
    const AddText=()=>{
        setCount(count + 1);
    }
    return(
        <div>
        <div>
            <img src={params.get("url")}width="340px"/>
            {
                Array(count)
                .fill(0)
                .map((e,i)=>(
                     <text key={i}/>))
            }
        </div>
        <button onClick={AddText} style={{backgroundColor:"green",
            margin:"30px",
            cursor:"pointer"}}>Add text</button>
        </div>
    );
};
export default EditPage;