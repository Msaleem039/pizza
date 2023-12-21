import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRout = ({isloged}) => {
    const navigate = useNavigate();
  
  return (
    isloged ? <Outlet/> : <Navigate to='/login'/>)
}
export default ProtectedRout