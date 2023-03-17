import React from 'react'
import { useDispatch } from 'react-redux'
import {addToList} from '../../redux/slice/list.slice'
import {pizza} from '../../data/pizza'
import './style.css'
function Main() {
  const dispatch = useDispatch()
  function  addToCart(e,item){
    e.preventDefault();
    dispatch(addToList({...item}))

  }

  return (

    <div>
      {
        pizza?.map(item=>(
            <div key={item.id} className = "main-card">
                <div className='div-img'><img src={item.img} alt=''/></div>
               <div>
                <p><span>Name :</span><span>{item.name}</span></p>
                <p>{item.dsc}</p>
                <p><span>Price :</span><span>{item.price}</span></p>
               </div>
               <button onClick={(e)=>addToCart(e,item)}>Add To card</button>
            </div>
        )
        
        )
      }
    </div>
  )
}

export default Main
