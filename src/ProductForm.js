import React from 'react';

export default class ProductForm extends React.Component{

	constructor(props){
				super();
				this.state={
					product:""
				}
	this.changeProduct=this.changeProduct.bind(this);
	this.saveProducts = this.saveProducts.bind(this);
	}
	changeProduct(event){
			this.setState({product:event.target.value});
	}

	saveProducts(event){
		event.preventDefault();
		this.props.saveProduct(this.state.product);
	}

	render(){
		return <form>
	    <div className="form-group">
	    <input className="form-control"  onChange={this.changeProduct}/></div>
	    <button className="btn btn-primary"  onClick={this.saveProducts}>Save</button>
	    </form>;
	}
}