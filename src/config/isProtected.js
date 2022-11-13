import { Navigate } from 'react-router-dom'

export const isProtected = (Component) => {
  return ()=>{
    let auth =  localStorage.getItem("token")
    if (!auth){
      return <Navigate to="/"/>
    }
    return <Component/>
  }
}