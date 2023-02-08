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
  let isAuthorized =  localStorage.getItem("token")
  const auth = localStorage.getItem('activetabID') === sessionStorage.getItem('currtabID') ? isAuthorized : false;
  return(
     auth ? children : <Navigate to="/" />
  )
}

export const PublicRoutes=({children,...rest})=>{
  let isAuthorized =  localStorage.getItem("token")
  const auth = localStorage.getItem('activetabID') === sessionStorage.getItem('currtabID') ? isAuthorized : false;
  return(
     !auth ? children : <Navigate to={'/dashboard'} />
  )
}