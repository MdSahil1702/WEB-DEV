import {Routes,Route} from 'react-router';
import{useState,useEffect} from 'react';
import './App.css';
import {HomePage} from './pages/HomePage';
import { Checkout } from './pages/Checkout';
import{OrderPage} from './pages/OrderPage';
import{Tracking} from './pages/Tracking';
import axios from 'axios'




function App() {
   const [cart,setCart]=useState([]);

   useEffect(

    ()=>{
 axios.get('/api/cart-items?expand=product').then((response)=>
        {
          setCart(response.data);
        }
      );
    },

   []);
    

  return (
    <>
    <Routes>
      <Route index element={ <HomePage cart={cart}/>}/>
      <Route path="checkout" element={ <Checkout cart={cart}/>}/>
      <Route path="order" element={<OrderPage/>}/>
      <Route path='tracking' element={<Tracking/>}> </Route>
    </Routes>
    </>
   
  );
}

export default App
