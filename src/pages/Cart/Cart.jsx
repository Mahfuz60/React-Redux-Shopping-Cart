import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';

const Cart = () => {
  const products=useSelector(state=>state.cart);
  console.log(products)
  return (
    <div className='co-md-12 col-10'>
     <h1 className='cartHeader'>WelCome To Your Products</h1>
     <div className='cartWrapper'>
      {
        
        products.map((product,id)=>(
          <div className='cartProduct'>
           <div className='col-md-6 col-6 mx-auto'>
           <img src={product.image} alt="" className='image-fluid w-75 h-75'/>
           {/* <ul >
              <li>{product.title}</li>
              <li>{product.price}</li>
              <li>{product.rating}</li>
              <li>{product.description}</li>
              
            </ul> */}

           </div>
           



          </div>



        ))
      }




     </div>

     

    </div>
  );
};

export default Cart;