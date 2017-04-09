import React, {Component} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

export default class extends Component {
  constructor() {
    super();  
    this.state={
      productsList:[]
    }
    this.saveProduct=this.saveProduct.bind(this);
    this.deleteProduct=this.deleteProduct.bind(this);
  }
  saveProduct(product){
      this.state.productsList.push(product);
      this.setState({productsList:this.state.productsList});
  }

  deleteProduct(product){
    this.state.productsList.splice(this.state.productsList.indexOf(product), 1);
    this.setState({productsList:this.state.productsList});
  }

  render() {
    return <div className="well">
            <ProductForm saveProduct={this.saveProduct}/> 
            <ProductList productsList={this.state.productsList} deleteProduct={this.deleteProduct}/>
          </div>;
  }

}