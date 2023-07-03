import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { isProtected } from "../config/RouteTypes";
import { fetchUsers } from "../redux/Reducers/ApiSlice";
import Loader from "../components/Loader/Loader";


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
      <h1>DASHBOARD</h1>
      <h3>User List</h3>
      {
        ApiSlice.status==="loading" ?
        <Loader open={true}/>
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

    <button onClick={()=>navigate('/home')}>POST MODULES</button>
    <button onClick={()=>navigate('/todos')}>TODOS MODULES</button>

    </div>
  );
}

export default Dahboard