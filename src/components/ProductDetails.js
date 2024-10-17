import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ProductDetails.css';  // Make sure to import the styles

const ProductDetails = () => {
  const productData = useSelector(state => state.productData);

  if (!productData || !productData.details) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="product-details">
      <img src={productData.image} alt={productData.title} />
      <h1>{productData.title}</h1>
      <p>{productData.subtitle}</p>
      <div className="product-tags">
        {productData.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
