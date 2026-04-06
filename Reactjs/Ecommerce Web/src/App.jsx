import {Routes,Route} from 'react-router';
import './App.css';
import {HomePage} from './pages/HomePage';
import { Checkout } from './pages/Checkout';
import{OrderPage} from './pages/OrderPage';
import{Tracking} from './pages/Tracking';


function App() {
  

  return (
    <>
    <Routes>
      <Route index element={ <HomePage/>}/>
      <Route path="checkout" element={ <Checkout/>}/>
      <Route path="order" element={<OrderPage/>}/>
      <Route path='tracking' element={<Tracking/>}> </Route>
    </Routes>
    </>
   
  );
}

export default App
