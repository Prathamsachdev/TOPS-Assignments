import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Product from './Product';

export default function Home() {
  const [data, setData] = useState([]); // all data
  const [id, setId] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [dataDlt, setDataDlt] = useState(null); // data delete
  const [dataEdt, setDataEdt] = useState(false); // data edit

  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const editMode = () => {
    setDataEdt(true);
  };

  const dataFetch = async () => {
    try {
      const response = await axios.get('https://67175651b910c6a6e0279cb5.mockapi.io/tableITEMS');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const dataInsert = async () => {
    const newData = {
      productname: productName,
      productdescription: productDescription,
      prodctimage: productImage,
      productquantity: productQuantity,
      productcategory: productCategory,
      productprice: productPrice,
    };

    try {
      await axios.post('https://67175651b910c6a6e0279cb5.mockapi.io/tableITEMS', newData);
      formdatareset();
      dataFetch();
    } catch (error) {
      console.log('Insert error: ', error);
    }
  };

  const dataDelete = async (id) => {
    try {
      await axios.delete(`https://67175651b910c6a6e0279cb5.mockapi.io/tableITEMS/${id}`);
      dataFetch();
    } catch (error) {
      console.log('Delete error: ', error);
    }
  };

  const dataEdit = async () => {
    const updatedData = {
      productname: productName,
      productdescription: productDescription,
      prodctimage: productImage,
      productquantity: productQuantity,
      productcategory: productCategory,
      productprice: productPrice,
    };

    try {
      await axios.put(`https://67175651b910c6a6e0279cb5.mockapi.io/tableITEMS/${id}`, updatedData);
      formdatareset();
      dataFetch();
      setDataEdt(false);
    } catch (error) {
      console.log('Edit error: ', error);
    }
  };

  const formdatareset = () => {
    setId('');
    setProductName('');
    setProductDescription('');
    setProductImage('');
    setProductQuantity('');
    setProductCategory('');
    setProductPrice('');
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>
      <form className="form">
        {/* Form fields (same as in your code) */}
      </form>
      <br />
    
      <table className="table" border={2}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">PNAME</th>
            <th scope="col">DESC</th>
            <th scope="col">IMAGE</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">PRICE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>

        {data.map((val, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{val.id}</td>
                <td>{val.productname}</td>
                <td>{val.productdescription}</td>
                <td><img src={val.prodctimage} alt={val.productname} /></td>
                <td>{val.productquantity}</td>
                <td>{val.productcategory}</td>
                <td>{val.productprice}</td>
                
                <td>
                  <button onClick={() => {
                    editMode();
                    setId(val.id);
                    setProductName(val.productname);
                    setProductDescription(val.productdescription);
                    setProductImage(val.prodctimage);
                    setProductQuantity(val.productquantity);
                    setProductCategory(val.productcategory);
                    setProductPrice(val.productprice);
                  }}>Edit</button>
                  &nbsp;&nbsp;
                  <button onClick={() => dataDelete(val.id)}>Delete</button>
                  &nbsp;&nbsp;
                  <button onClick={() => navigate(`/product/${val.id}`)}>View</button> {/* View button */}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
