import React from 'react'
import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
// import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import Ordersummary from './components/OrderSummary';
import Product from './components/Product';
import Featured from './components/Featured';
import Newproduct from "./components/Newproducts"
import Users from './components/Users';
import UsersDetail from './components/UsersDetail';
import Admin from './components/Admin';

const LazyAbout = React.lazy(() => import('./components/About'));


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
                  {/* Lazy about */}
        <Route path="about" element={<React.Suspense fallback = 'Loading...'> <LazyAbout /></React.Suspense>} />
        <Route path="contact" element={<Contact />} />
        <Route path="order" element={<Ordersummary />} />

        {/* Route Nesting */}
        <Route path="product" element={<Product />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="newproduct" element={<Newproduct />} />
        </Route>

        <Route path="users" element={<Users />} >
          <Route path=":userId" element={<UsersDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
