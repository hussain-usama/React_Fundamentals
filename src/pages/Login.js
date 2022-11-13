import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginData } from "../redux/Reducers/LoginSlice";


const LoginUser = (obj) => {
  return new Promise((resolve,reject)=>{
    axios.post('https://reqres.in/api/login',obj).then(res=>{
      console.log(res)
        resolve(res)
    }).catch(err=>{
        console.log(err)
        reject(err)
    })
})
}
function Login() {

  const [value, setValue] = useState("")
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const changeRoute = () => {

    let obj = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    }
    LoginUser(obj)
    dispatch(loginData(obj))
    localStorage.setItem("token", "user")
    navigate("/dashboard")
  }

  return (
    <div className="">
      <h1>Login</h1>
      <h3>Click To Login</h3>
      {/* <input value={value} onChange={e => setValue(e.target.value)} /> */}
      <button onClick={changeRoute}>go to dashboard</button>
    </div>
  );
}

export default Login;