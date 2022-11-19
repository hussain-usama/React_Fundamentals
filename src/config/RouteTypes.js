import { Navigate, Route } from 'react-router-dom'

// export const isProtected = (Component) => {
//   return ()=>{
//     let auth =  localStorage.getItem("token")
//     if (!auth){
//       return <Navigate to="/"/>
//     }
//     return <Component/>
//   }
// }
export const PrivateRoutes=({children,...rest})=>{
  let auth =  localStorage.getItem("token")
  return(
     auth ? children : <Navigate to="/" />
  )
}

export const PublicRoutes=({children,...rest})=>{
  let auth =  localStorage.getItem("token")
  return(
     !auth ? children : <Navigate to={'/dashboard'} />
  )
}