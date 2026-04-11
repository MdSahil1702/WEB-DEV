import axios from 'axios';
import { Header } from '../../Components/Header'
import './HomePage.css';
// import { products } from '../../data/products.js';
import {useEffect, useState} from 'react';
import { Productgrid } from './Productgrid';

export function HomePage({cart}) {
  const [products,setProducts]=useState([]);
 


  useEffect(()=>{
      axios.get('/api/products').then(
    (response) => {
      setProducts(response.data);
    }
  );

    
},[]);
  


return (
  <>

    <Header cart={cart}/>


    <div className="home-page">
      <Productgrid products={products}/>
    </div>

  </>
);
}