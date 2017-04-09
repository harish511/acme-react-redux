import React, {Component} from 'react';

import ProductsPage from './ProductsPage';


export default function ({ children }) {
  return (
    <div className="container">
    <h1>Acme</h1>
      <ProductsPage/>
    </div>
  );
}
