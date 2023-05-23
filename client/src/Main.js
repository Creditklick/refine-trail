import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

// import Footer from './components/Footer';

import Refine from './pages/Refine/Refine';

import Error from './components/Error';

import Payout from './pages/Refine/Payout';
import Payment from './pages/Refine/Payment';

import Confirm from './pages/Refine/Confirm';
import Updatehome from './pages/Update/Updatehome';
import Update from './pages/Update/Update';
import PayoutN from './pages/Refine/PayoutN';
import OTP from './pages/Refine/OTP';
const Main = () => {
  
  return (
    <div > 
     <BrowserRouter>
        {/* <Header/> */}
       
<Routes>
 
  <Route path="/" exact element={<Refine/>}/>
 
  <Route path='*' exact element={<Error/>}/>
  

  <Route path="/queries" exact element={<Payout/>}/>
  <Route path="/queriesN" exact element={ <PayoutN/> }/>


 
  <Route path="/payments" exact element={<Payment/>}/>
  <Route path="/confirmation" exact element={<Confirm/>}/>
  <Route path="/updatehome" exact element={<Updatehome/>}/>
  <Route path="/update/:id" exact element={<Update/>}/>
  <Route path="/otp" exact element={<OTP/>}/>

</Routes>
{/* <Footer/> */}
</BrowserRouter>

   
    </div>
  )
}

export default Main