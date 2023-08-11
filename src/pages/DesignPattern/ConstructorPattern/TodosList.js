import React, { useState } from 'react'
import Todos from './ConstructorTodos'

function TodosList() {
    const [todoStore]=useState(new Todos());
    const [list,setList]=useState(todoStore.getTodos())
    console.log(todoStore.getTodos())
  return (
    <div>
        <h3>TodosList</h3>

        {list?.map((x,index)=>{
            return(
                <p key={index}>{x}</p>
            )
        })}
        <button 
            onClick={()=>{
                todoStore.addTodos(`Text ${(Math.random()*200).toFixed()}`);
                setList([...todoStore.getTodos()])
            }}  
        >Add Todo</button>
    </div>
  )
}

export default TodosList