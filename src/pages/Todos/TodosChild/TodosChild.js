import React, { memo, useCallback, useState } from "react";

const TodosChild=()=>{
    console.log('CHILD RENDER')
    const [todoList,settodoList]=useState([])
    const addFunction=()=>{
        settodoList((prev)=>[...prev, 'new'])
    }

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