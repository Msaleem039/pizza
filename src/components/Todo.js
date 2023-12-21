import React, { useState } from 'react'

const Todo = () => {
    const [activity , setActivity]=useState("")
    const [list , setListdata]=useState([]);
    const handler =(e)=>{
        setListdata([...list,activity])
        console.log(list)
        setActivity('')
        e.preventDefault();
    }

    const remove=(id)=>{
      let updateitem = list.filter((item,i)=>{
        return i!=id
      })
      setListdata(updateitem)
    }
  return (
    <div className='container'>
    <div className='row'>
    <h1 className='text-center'>Todo App</h1>
    <input type='text' placeholder='add Product' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
    <button onClick={handler}>Add</button>
    {list !=[] && list.map((item,id)=>{
        return(
            <div>
          <p key={id}>
          {list}
          <button onClick={()=>remove(id)}>remove</button>
          </p>

            </div>
        )
    })}
    </div>
    
    
    </div>
  )
}

export default Todo