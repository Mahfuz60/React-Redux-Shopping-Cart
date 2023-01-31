import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { fetchProduct } from '../../store/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../../store/productSlice';

const Products = () => {
  // const [products, setProducts] = useState([]);


  const dispatch=useDispatch();
  const{data:products,status}=useSelector((state=>state.product));
  useEffect(() => {
    dispatch(fetchProduct());
    
  }, [])
  

  // fetch to api component

  // useEffect(() => {
    
  //   const fetchProducts = async () => {
  //     const res = await fetch('https://fakestoreapi.com/products');
  //     const data = await res.json();
  //     setProducts(data);

  //   };
  //   fetchProducts();


  // }, [products])


  if(status===STATUS.LOADING) {
    return <h5 className='text-info'>Loading.....</h5>;
  } 
  if(status===STATUS.ERROR){
    return <h5 className='text-warning'>Something went to Wrong!.....</h5>
  }
    
  
return (
    
     <div className='row'>
      <h3 className='text-info'>Products List:</h3>
      {
        products.map((product)=>(
       
           <div className='col-md-4 col-12 d-flex ' key={product.id}>
          
          <SingleProduct product={product}/>
        
        
        </div>
      
        ))
      }
     
     </div>
     
     
  
     
     
  );
};

export default Products;


