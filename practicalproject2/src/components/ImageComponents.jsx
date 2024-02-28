import React from 'react'
import { cardData } from './CardData';

function ImgComponents(props) {
  const filteredItems=cardData.filter(item=>(item.imageName.toLowerCase().includes(props.search.toLowerCase())))  
  return (
    <div className='flow p-2 shadow'>
       {filteredItems.length>0 ? (
       filteredItems.map((items)=>(
        <div class="card m-auto w-100 border-2 border-black mb-2 shadow " onClick={()=>{props.data(items)}} >
        <img src={items.imageUrl} alt={items.imageName} class="card-img-top  " />
       <div class="card-body">
         <h5 class="card-title text-danger">{items.imageName}</h5>
         <a href="#" class="btn btn-primary">Buy</a>
       </div>
     </div> 
       ))
       ) : (<p>No items found</p>)
      }
    </div>
  )
}

export default ImgComponents;