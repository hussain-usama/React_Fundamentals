import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from '../utils/useFetch'
import Loader from "../components/Loader/Loader";
function Home() {

  const [searchValue,setSearchValue]=useState("")
  const [postList,setpostList]=useState("")
  const {data,loader,error}=useFetch("https://jsonplaceholder.typicode.com/posts")
  const navigate = useNavigate()
  const [isPending,startTransition]=useTransition()

  useEffect(()=>{
    try {
      if(data.length) setpostList(data)
      else setpostList([])
    } catch (error) {
      
    }
  },[data])

  useEffect(()=>{
    try {
      if(searchValue){
       
        let timeout=setTimeout(async() => {
          const response =await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${searchValue}`)
          if(response.status===200){
            setpostList(response.data)
          }
        }, 500);
        return (()=>{
          clearTimeout(timeout)
        })
      }
      else{
        setpostList(data)
      }
    } catch (error) {
      console.log(error,'searchapi')
    }
  },[searchValue])
  
  const SearchList=(e)=>{
    try {
      let value=e.target.value
      setSearchValue(value)
      // startTransition(()=>{
      //   debugger
      //   let _array=data.filter(item=>item.title.includes(value))
      //   setpostList(_array)
      // })

    } catch (error) {
      
    }
  }

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
      <div className="d-flex">
        <h3>All Posts</h3>
        <input placeholder="add keyword 1 or 2 or 3" value={searchValue} onChange={SearchList} /><br />
        <button onClick={()=>navigate("/addPost")}>Add Post</button>
      </div>
      {(loader) ?
          <Loader open={loader}/>
        :
        <>
          {/* {isPending ?
          <h4>Searching...</h4>
          :
          postList && postList.map((item, index) => {
            return <li className="cursor-pointer" key={index} onClick={()=>checkPost(index)}>{item.title}</li>
          })
        } */}
          {postList && postList.map((item, index) => {
            return <li className="cursor-pointer" key={index} onClick={()=>checkPost(index)}>{item.title}</li>
          })}
        </>
      }
    </div>
  );
}

export default Home