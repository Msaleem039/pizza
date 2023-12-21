import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = ({setIsloged}) => {
  const dispatch = useDispatch();
  const amount = useSelector((state)=>state.cart);

  console.log(amount);
  const navigate = useNavigate();
const add =()=>{
  
}
 
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li><Link class="nav-link active" aria-current="page" to="/">Home</Link></li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/product">Product</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/todo">Todo</Link>
      </li>
      
        <li><Link class="nav-link active" aria-current="page" to="/about">About</Link></li>
        <li><Link class="nav-link active" aria-current="page" to="/login">Register</Link></li>
        <li><Link class="nav-link active" aria-current="page" to="/online">Online</Link></li>
      </ul>
      <button onClick={()=>setIsloged(true,navigate('/'))}>Login</button>
      <button onClick={()=>setIsloged(false, navigate('/login'))}>Logout</button>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button>button</button>
      <p><strong>{amount}</strong></p>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar