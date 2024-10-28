import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Listproducts = () => {
const[list,setList]=useState([])

const fetchData=async ()=>{
  const response = await axios.get("http://localhost:2020/api/products/allproducts");
  setList(response.data);
  
}


useEffect(()=>{
},[])

  return (
    <div>listproducts</div>
  )
}

export default Listproducts
