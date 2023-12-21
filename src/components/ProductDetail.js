import React, { useState } from 'react'
import data from '../data';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {id} = useParams();
  const getdata = data.find((item)=>item.id == id)
    // const [pro, setPro]=useState({});
    // const  getData = data.filter((x)=>x.id===id!)
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-lg-6'>
    <img src={getdata.image} alt=''/>

<h1>detail page</h1>
    </div>
    <div className='col-lg-6'>
    <p>{getdata.price}</p>
    <p>{getdata.description}</p>
    </div>
    </div>
    </div>
  )
}

export default ProductDetail