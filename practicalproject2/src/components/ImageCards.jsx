import React from 'react'

function ImageCards({object}) {
  
  return (
      <div class="card m-auto w-50 border-light border-2 mt-4 col-sm-12 col-md-6 col-lg-4"  >
   <img src={object.imageUrl} class="card-img-top" alt="data"/>
  <div class="card-body">
    <h5 class="card-title text-danger">{object.imageName}</h5>
    <p class="card-text">{object.description}</p>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>
</div>

  )
}

export default ImageCards;