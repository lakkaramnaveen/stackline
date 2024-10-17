import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ProductDetails.css';  // Import the CSS for Product Details

const ProductDetails = () => {
  const productData = useSelector(state => state.productData);

  // Check if productData is available and if productData.tags exists
  if (!productData || !productData.details) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="product-details">
      <img src={productData.image} alt={productData.title} className="product-image" />
      <h1>{productData.title}</h1>
      <p>{productData.subtitle}</p>

      {/* Render tags if available, otherwise show no tags */}
      <div className="product-tags">
        {productData.tags && productData.tags.length > 0 ? (
          productData.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))
        ) : (
          <span>No tags available</span>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
