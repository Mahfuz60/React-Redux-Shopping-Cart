import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../store/cartSlice';

const Cart = () => {
  const dispatch=useDispatch();

  const handleRemoveCart=(productId)=>{
    dispatch(remove(productId));
  }
  
  const products = useSelector(state => state.cart);
  console.log(products)
  return (
    <div className='co-md-12 col-10'>
      <h1 className='cartHeader'>WelCome To Your Products</h1>
      <div className='cartWrapper'>
        {

          products.map((product, id) => (

            <div className='cartProduct' key={id}>

              <div className='row mt-3 cartProductDetails'>
                <div className='col-md-10 col-10 mx-auto '>
                  <img src={product.image} alt="" className='image-fluid cardImg '  />
                  <h5>Title:{product.title}</h5>
                    <p>Category:{product.category}</p>
                    <h6>Price:${product.price}</h6>
                    <p>
                      <span style={{ fontSize: '15px', color: '', marginTop: '5px',fontWeight:'400' }}>Description:{product.description}</span>
                    </p>

                    <button className='cartBtn' onClick={()=>handleRemoveCart(product.id)}>Remove</button>


                </div>
              



              </div>
            </div>



          ))
        }




      </div>



    </div>
  );
};

export default Cart;