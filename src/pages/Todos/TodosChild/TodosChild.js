import axios from "axios";
import React, { memo, useCallback, useEffect, useState } from "react";

const TodosChild=()=>{
    const [todoList,settodoList]=useState([])
    const addFunction=()=>{
        settodoList((prev)=>[...prev, 'new'])
    }

    /* Questions for interview */
    /*  */
    console.log('1');
    const newPromise = new Promise((res, rej) => {
      res(console.log('2'));
    });
    setTimeout(async () => {
      await newPromise();
    }, 5000);
    console.log('3');
  /*  */
    let obj={a:1 , b : { a:2 , c:{ a:3 }}}
    let obj1={...obj}
    obj1.b=4
    console.log(obj)
    console.log(obj1)

    return(
        <div>
           <h1>TodosChild 1</h1>
           
           <button onClick={addFunction}>Add</button>
           {
                todoList && todoList.map((x,index)=>{
                    return <li key={index}>{`${x} ${index}`}</li>
                })
            }
        </div>
    )
}
export default memo(TodosChild)