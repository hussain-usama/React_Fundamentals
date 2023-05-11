import React, { useContext, useCallback, useState, useEffect } from "react";
import { Ctx } from "../../Provider/Provider";
import TodosChild from "./TodosChild/TodosChild";
import axios from "axios";

const apiPromise=(url)=>{
    return new Promise((resolve,reject)=>{
        axios.get(url)
        .then(doc=>resolve(doc))
        .catch(err=>reject(err))
    })
}

const Todos=()=>{

    // const getContext=useContext(Ctx)
    console.log('PARENT RENDER')
    const [increment,setIncrement]=useState(0)

    useEffect(()=>{
        (async()=>{
            try {
                let setteled=await Promise.all([apiPromise('https://jsonplaceholder.typicode.com/posts'),apiPromise('https://hub.dummyapis.com/delay?seconds=1')])
                console.log(setteled,'setteled')

            } catch (error) {
                console.log(error)
            }
        })()
    },[])


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