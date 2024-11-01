import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'; // Importa el archivo CSS

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Aplicación de Carrito de Compras</h1>
        <div className="container">
          <div className="product-list">
            <ProductList />
          </div>
          <div className="cart">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
