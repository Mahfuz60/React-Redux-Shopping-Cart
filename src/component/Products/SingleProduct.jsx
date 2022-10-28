import React from 'react';
import './Products.css';

const SingleProduct = ({ product }) => {
  const { title, price, image, description, rating, category } = product;
  return (


    <div class="card m-3" >
      <img src={image} class="card-img-top" alt='' />
      <div class="card-body">
        <h5 class="card-title text-secondary">{title}</h5>
        <p><span className='text-success me-1'>Category:</span>{category}</p>
        <p><span className='text-success me-1'>Price:</span>${price}</p>
        <p><span className='text-warning me-1'>Rating:</span>{rating.rate}</p>
        {/* <p class="card-text text-secondary">{description}</p> */}

      </div>
      <button className='btn-cart'>Add to Cart</button>




    </div>


  );
};

export default SingleProduct;