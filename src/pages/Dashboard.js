import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { isProtected } from "../config/isProtected";
import { fetchUsers } from "../redux/Reducers/ApiSlice";


function Dahboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {ApiSlice}=useSelector(state=>state)
  const {LoginSlice}=useSelector(state=>state)
  console.log("userSlice",LoginSlice)


  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])

  

  return (
    <div className="">
      <h1>Dashboard</h1>
      {
        ApiSlice.status==="loading" ?
        <h1>Loading .....</h1>
        :
        <div>
          {
            ApiSlice.postsArray?.data.map((item,index)=>{
              return(
                <li key={item.id}>
                  {item.first_name}
                </li>
              )
            })
          }

        </div>
      }

    <button onClick={()=>navigate('/home')}>Home</button>

    </div>
  );
}

export default isProtected(Dahboard);