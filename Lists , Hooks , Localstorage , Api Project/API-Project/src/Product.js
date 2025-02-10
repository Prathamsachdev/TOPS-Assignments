import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Product() {
  const [data, setData] = useState([]); 
  const [id, setId] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [dataDlt, setDataDlt] = useState(null); 
  const [dataEdt, setDataEdt] = useState(false); 

       let nav= useNavigate() // hooks usenavigate 

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


    const datanavigate=(pid)=>{
       
      nav('/productdetail/pid')
         }

  return (
    <div className="container product-container">
        <form className="product-form">
            <h2>{dataEdt ? 'Edit Product' : 'Add Product'}</h2>
            <input
                type="text"
                className="input"
                placeholder="Enter Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <input
                type="text"
                className="input"
                placeholder="Enter Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
            />
            <input
                type="text"
                className="input"
                placeholder="Enter Image URL"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
            />
            <input
                type="text"
                className="input"
                placeholder="Enter Quantity"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
            />
            <input
                type="text"
                className="input"
                placeholder="Enter Category"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
            />
            <input
                type="text"
                className="input"
                placeholder="Enter Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
            />
            <button
                type="button"
                onClick={() => {
                    if (dataEdt) {
                        dataEdit();
                    } else {
                        dataInsert();
                    }
                }}
            >
                {dataEdt ? 'Edit Item' : 'Add Item'}
            </button>
        </form>
        <table className="product-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((val, index) => (
                    <tr key={index}>
                        <td>{val.id}</td>
                        <td className="truncate">{val.productname}</td>
                        <td className="truncate">{val.productdescription}</td>
                        <td><img src={val.prodctimage} alt={val.productname} /></td>
                        <td>{val.productquantity}</td>
                        <td>{val.productcategory}</td>
                        <td>₹{val.productprice.toLocaleString('en-IN')}</td>
                        <td className="action-buttons">
                            <button onClick={() => nav(`/productdetail/${val.id}`)}>View</button>
                            <button onClick={() => dataDelete(val.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}
