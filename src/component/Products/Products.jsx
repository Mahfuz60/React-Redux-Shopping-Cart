import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { fetchProduct } from '../../store/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../../store/productSlice';

const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch=useDispatch();
  const{data:products,status}=useSelector((state=>state.product))
  

  useEffect(() => {
    dispatch(fetchProduct());
    

//fetch to api component

    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   setProducts(data);

    // };
    // fetchProducts();


  }, [products])

  if(status===STATUS.LOADING){
    return <p className='text-warning'>Loading......</p>;
  }


  return (
    
     <div className='row'>
      <h3 className='text-info'>Products List:</h3>
      {
        products.map((product,id)=>(
       
           <div className='col-md-4 col-12 d-flex '>
          
          <SingleProduct key={id} product={product}/>
        
        
        </div>
      
        ))
      }
     
     </div>
     
     
  
     
     
  );
};

export default Products;


