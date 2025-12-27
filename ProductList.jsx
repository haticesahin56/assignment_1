import React from 'react';
import Product from './Product'; 

const ProductList = () => {
  const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 600 }
  ];

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
      {products.map((product) => (
        <Product 
          key={product.id}      
          title={product.title} 
          price={product.price} 
        />
      ))}
    </div>
  );
};

export default ProductList;