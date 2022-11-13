import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isProtected } from "../config/isProtected";
function Home() {

  const navigate = useNavigate()

  const navigateFunction=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="">
      <h1>HOME</h1>

      <button onClick={navigateFunction}>Logout</button>
    </div>
  );
}

export default isProtected(Home);