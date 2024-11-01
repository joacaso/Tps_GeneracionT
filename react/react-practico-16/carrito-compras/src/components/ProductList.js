import React from 'react';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const { addToCart } = useCart();
  
  // Lista de productos disponibles
  const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 150 },
    { id: 3, name: 'Producto 3', price: 200 },
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
