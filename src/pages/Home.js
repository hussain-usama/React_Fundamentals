import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from '../utils/useFetch'

function Home() {

  const {data,loader,error}=useFetch("https://jsonplaceholder.typicode.com/posts")
  const navigate = useNavigate()

  const checkPost=(index)=>{
    try {
      console.log(index)
      navigate(`/posts/${index+1}`)
    } catch (error) {
      
    }
  }

  return (
    <div className="">
      <h1>HOME</h1>
      <h3>All Posts</h3>
      {(loader || data.length === 0) ?
        <h3>Loading...</h3>
        :
        <>
          {data && data.map((item, index) => {
            return <li className="cursor-pointer" onClick={()=>checkPost(index)}>{item.title}</li>
          })}
        </>
      }
    </div>
  );
}

export default Home