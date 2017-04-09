import React, {Component} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import store from './store';
import {saveProduct, deleteProduct} from './actions';

export default class extends Component {
  constructor() {
    super();  
    this.state = store.getState();
    this.saveProduct=this.saveProduct.bind(this);
    this.deleteProduct=this.deleteProduct.bind(this);
  }
  saveProduct(product){
      this.state.productsList.push(product);
      //this.setState({productsList:this.state.productsList});
       store.dispatch(saveProduct(product));
  }

  deleteProduct(product){
    this.state.productsList.splice(this.state.productsList.indexOf(product), 1);
   // this.setState({productsList:this.state.productsList});
     store.dispatch(deleteProduct(product));
  }

  render() {
    return <div className="well">
            <ProductForm saveProduct={this.saveProduct}/> 
            <ProductList productsList={this.state.productsList} deleteProduct={this.deleteProduct}/>
          </div>;
  }

}