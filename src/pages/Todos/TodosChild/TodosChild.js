import axios from "axios";
import React, { memo, useCallback, useEffect, useState } from "react";

const apiPromise=()=>{
    return new Promise((resolve,reject)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(doc=>resolve(doc))
        .catch(err=>reject(err))
    })
}

const apiPromise1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(doc=>{
                // resolve(doc)
                throw new Error('Error message')
            })
            .catch(err=>reject(err))
        }, 1000);
    })
}

const TodosChild=()=>{
    const [todoList,settodoList]=useState([])
    const addFunction=()=>{
        settodoList((prev)=>[...prev, 'new'])
    }

    useEffect(()=>{
        (async()=>{
            try {
                // let[result,result1]=await Promise.all([apiPromise(),apiPromise1()])
                // console.log(result,result1,'result')
                let setteled=await Promise.allSettled([apiPromise(),apiPromise1()])
                console.log(setteled,'setteled')

            } catch (error) {
                console.log(error)
            }
        })()
    },[])
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