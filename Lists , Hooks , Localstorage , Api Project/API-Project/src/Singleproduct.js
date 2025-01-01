import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'
export default function Singleproduct() {
    let {id} = useParams();

    /*
    use selector - store prev value and curent value - render -3 3
    usedispatch - action 
    provider - {
      
    }
    */

      const [x, setx] = useState([]);


      const dfetch= async ()=>{
 
         await axios.get(`https://67175651b910c6a6e0279cb5.mockapi.io/tableITEMS/${id}`)
         .then((response)=>{
          setx(response.data)
         })

         .catch((error) =>console.log(error))
           
        }

          useEffect(() => {
            dfetch()
          
          
          }, [id]);

  return (
    <div>
         <p>{x.productname}</p>
         <p>{x.productdescription}</p>
         <p>{x.prodctimage}</p>
         <p>{x.productquantity}</p>
          <p>{x.productcategory}</p>
          <p>{x.productprice}</p>
    </div>
  )
}
