import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [dataedt, setdataedt] = useState(false); 

  const dataInsert = async () => {
    if (!name || !description || !price) {
      return;
    }

    const newData = {
      name: name,
      description: description,
      price: price,
    };

    try {
      await axios.post('https://671f2e53e7a5792f052d396d.mockapi.io/Product', newData);
      formDataReset();
      dataFetch();
    } catch (error) {
      console.log('Insert error:', error);
    }
  };

  const formDataReset = () => {
    setName('');
    setDescription('');
    setPrice('');
  };

  const dataFetch = async () => {
    try {
      const response = await axios.get('https://671f2e53e7a5792f052d396d.mockapi.io/Product');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []); 

  const dataDelete = async (id) => {
    try {
      await axios.delete(`https://671f2e53e7a5792f052d396d.mockapi.io/Product/${id}`);
      dataFetch();
    } catch (error) {
      console.log('Delete error', error);
    }
  };

  const dataEdit = async () => {
    const updateData = {
      name: name,
      description: description,
      price: price,
    };

    try {
      await axios.put(`https://671f2e53e7a5792f052d396d.mockapi.io/Product/${id}`, updateData);
      formDataReset();
      dataFetch();
      setdataedt(false); 
    } catch (error) {
      console.log('Edit error:', error);
    }
  };

  return (
    <div>
      <form className='form'>
        <input
          type='text'
          className='input'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          className='input'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='text'
          className='input'
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button
          type='button'  
          onClick={() => {
            if (dataedt) {
              dataEdit();
            } else {
              dataInsert();
            }
          }}
        >
          {dataedt ? 'Edit Item' : 'Add Item'}
        </button>
      </form>

      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.description}</td>
                <td>{val.price}</td>
                <td>
                  <button onClick={() => dataDelete(val.id)}>delete</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setdataedt(true); 
                      setID(val.id);
                      setName(val.name);
                      setDescription(val.description);
                      setPrice(val.price);
                    }}
                  >
                    edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
