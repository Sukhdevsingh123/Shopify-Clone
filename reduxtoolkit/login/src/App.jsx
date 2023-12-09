import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Product from './Components/Product';
import Dashbord from './Components/Dashbord'; // Corrected the import path
// import Cart from './Components/Cart';

import Shop from './Components/Shop';
import Nopage from './Components/Nopage';
import Sign from './Components/Sign';
import SignIn from './Components/SignIn';
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
       
          <Route path="/" element={<Dashbord />} />

        <Route path="/Sign" element={<Sign />} />
        <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Product" element={<Product />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/Shop" element={<Shop />} />

          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
