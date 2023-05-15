import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import CartProvider from './context/CartContext';
import { BlogsContextProvider } from './context/BlogContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <UserContextProvider> 
    <CartProvider> 
      <BlogsContextProvider> 
    <App />
    </BlogsContextProvider>
    </CartProvider>
    </UserContextProvider>
  </React.StrictMode>
);

