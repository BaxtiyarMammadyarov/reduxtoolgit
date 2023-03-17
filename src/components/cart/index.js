import React from 'react'
import { useSelector } from 'react-redux'
function Card() {
    const list  = useSelector(state => state.value)
  return (
    <div>
    {
        list?.map(item=>(
            <div key={item.id} className = "main-card">
                <div className='div-img'><img src={item.img} alt=''/></div>
               <div>
                <p><span>Name :</span><span>{item.name}</span></p>
                <p>{item.dsc}</p>
                <p><span>Price :</span><span>{item.price}</span></p>
               </div>
               <button >yyy</button>
            </div>

        ))
    }
      
    </div>
  )
}

export default Card
