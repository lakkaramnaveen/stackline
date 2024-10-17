import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ProductDetails.css';  // Import the CSS

const ProductDetails = () => {
  const productData = useSelector(state => state.productData);

  if (!productData || !productData.details) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="product-details">
      <img src={productData.image} alt={productData.title} />
      <div>
        <h1>{productData.title}</h1>
        <p>{productData.subtitle}</p>
        <ul>
          {productData.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
