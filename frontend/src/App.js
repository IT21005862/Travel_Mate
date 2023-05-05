import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import {  useSelector } from 'react-redux';
import Destination from './pages/DestinationNowen';
import Seller from './pages/SellerDuvidu';
import Hotel from './pages/Hotel';
import Travel from  './pages/TravelBimsara';
import Usertypes from './pages/Usertypes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
           <BrowserRouter>
           <ScrollToTop/>
           <Header/>
           <Routes>
   
           {!user && (
            <>
  
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin/>} />
      
      </>
           )}
           
 {user && (
  <>

<Route path="/usertypes" element={<Usertypes />} />

   
 </>
 )}

{user && user.isDest && (
                        <>
      <Route path="/dest" element={<Destination />} />
                        </>
)}

{user && user.isHotel && (
                        <>
      <Route path="/hot" element={<Hotel />} />
                        </>
)}
{user && user.isTravel && (
                        <>
      <Route path="/trav" element={<Travel />} />
                        </>
)}

{user && user.isSeller && (
  <>
      <Route path="/sel" element={<Seller />} />
  </>
)}

{user && user.isAdmin && (
                        <>

                        </>
)}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
