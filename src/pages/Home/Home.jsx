import React from 'react';
import Products from '../../component/Products/Products';

const Home = () => {
  return (
    <div className='container'>
    
      <h1 className='fw-bold text-danger' style={{marginTop:'100px'}}>Welcome to Redux Shopping Store</h1>

      <div className='mt-4'>
        <Products/>

      </div>
      
    </div>
  
  );
};

export default Home;