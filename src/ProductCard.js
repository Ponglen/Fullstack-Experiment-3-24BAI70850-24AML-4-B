import React, { useState } from "react";
import "./App.css";

function ProductCard({ title, price, description, image, inStock }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    if (inStock) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 1500);
    }
  };

  return (
    <div 
      className={`product-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`stock-badge ${inStock ? "in" : "out"}`}>
        {inStock ? "✓ In Stock" : "✗ Out of Stock"}
      </div>

      <img 
        src={image} 
        alt={title} 
        className={`product-image ${isHovered ? "image-zoom" : ""}`}
      />

      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4 className="price">${price}</h4>
        <button 
          className={`add-to-cart-btn ${isClicked ? "clicked" : ""} ${!inStock ? "disabled" : ""}`}
          disabled={!inStock}
          onClick={handleAddToCart}
        >
          {isClicked ? "✓ Added!" : inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
