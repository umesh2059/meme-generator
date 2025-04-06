import react from "react"

import {useSearchParams} from "react-router-dom"
const  EditPage=()=>{
    const [params]=useSearchParams();
    console.log(params.get("url"));
    return(
        <div>Edit page</div>
    );
};
export default EditPage;
