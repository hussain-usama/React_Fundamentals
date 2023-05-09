import React, { useContext, useCallback, useState } from "react";
import { Ctx } from "../../Provider/Provider";
import TodosChild from "./TodosChild/TodosChild";

const Todos=()=>{

    // const getContext=useContext(Ctx)
    console.log('PARENT RENDER')
    const [increment,setIncrement]=useState(0)


    return(
        <div>
           <h1>Parent</h1>
            <p>Increment : {increment}</p>
            <button onClick={()=>setIncrement(increment+1)}>+</button>
            <TodosChild/>
        </div>
    )
}
export default Todos