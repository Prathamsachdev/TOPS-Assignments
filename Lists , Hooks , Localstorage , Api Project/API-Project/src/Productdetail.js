import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Productdetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://67175651b910c6a6e0279cb5.mockapi.io/tableITEMS/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container product-detail-container">
      <h1>{product.productname}</h1>
      <img src={product.prodctimage} alt={product.productname} className="product-image" />
      <div className="product-details">
        <p><strong>Description:</strong> {product.productdescription}</p>
        <p><strong>Quantity:</strong> {product.productquantity}</p>
        <p><strong>Category:</strong> {product.productcategory}</p>
        <p><strong>Price:</strong> ₹{product.productprice.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default Productdetail;
