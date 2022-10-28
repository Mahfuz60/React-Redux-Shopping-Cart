import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);

    };
    fetchProducts();
  }, [products])

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