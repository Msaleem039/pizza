import React, { useState } from 'react'
import data from '../data'

import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../redux/reducerSlice'

const Product = () => {
   const [prodata, setProdata]=useState(data)

  const filterproduct =(curitem)=>{
    const updateitem = prodata.filter((item)=>{
      return item.title == curitem
    })
    setProdata(updateitem)
  }
  const dispatch = useDispatch();
  const addproduct =(x)=>{
   dispatch(add(x))
  }
    const {id} = useParams();
  return (
    <div className='container'>
    <button type="button" class="btn btn-primary" onClick={()=>setProdata(data)}>Primary</button>
    <button type="button" class="btn btn-secondary" onClick={()=>filterproduct('malai boti pizza')}>Malai Boti</button>
    <button type="button" class="btn btn-success" onClick={()=>filterproduct("kabab stuffer pizza")}>Kabab</button>
    <button type="button" class="btn btn-danger" onClick={()=>filterproduct("pizza sandwich")}>Pizza</button>
    <button type="button" class="btn btn-warning" onClick={()=>filterproduct("flaming pasta")}>Pasta</button>
    <div className='row'>
    {prodata.map((x)=>{
    return(
        <div className='col-md-3'>
      <div className="card" style={{width: '18rem'}}>
 <Link to={`/product/${x.id}`}> <img src={x.image} className="card-img-top" alt="..." /></Link>
  <div className="card-body">
    <p className="card-text">{x.description.substring(0,20)}</p>
    <button onClick={()=>addproduct(x)}>Add</button>
  </div>
</div>
        </div>
    )
    })}
    

    </div>
    
    </div>
  )
}

export default Product