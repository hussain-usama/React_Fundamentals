import React, { useContext } from "react";
import { Ctx } from "../../Provider/Provider";

const Todos=()=>{

    const getContext=useContext(Ctx)
    console.log(getContext)
    return(
        <div>
           <h1>CHILD 1</h1>
        </div>
    )
}
export default Todos