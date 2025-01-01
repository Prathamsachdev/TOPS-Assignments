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
    <div>
      <h1>{product.productname}</h1>
      <p>{product.productdescription}</p>
      <img src={product.prodctimage} alt={product.productname} />
      <p>Quantity: {product.productquantity}</p>
      <p>Category: {product.productcategory}</p>
      <p>Price: {product.productprice}</p>
    </div>
  );
};

export default Productdetail;
