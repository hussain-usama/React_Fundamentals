import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from '../utils/useFetch'

function Home() {

  const {data,loader,error}=useFetch("https://jsonplaceholder.typicode.com/posts")
  const navigate = useNavigate()
  const navigateFunction = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const checkPost=(index)=>{
    try {
      console.log(index)
    } catch (error) {
      
    }
  }

  return (
    <div className="">
      <h1>HOME</h1>
      {(loader || data.length === 0) ?
        <h3>Loading...</h3>
        :
        <>
          {data && data.map((item, index) => {
            return <li className="cursor-pointer" onClick={()=>checkPost(index)}>{item.title}</li>
          })}
        </>
      }
      <button onClick={navigateFunction}>Logout</button>
    </div>
  );
}

export default Home