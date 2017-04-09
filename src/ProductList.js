import React from 'react';

export default function ({productsList,deleteProduct}) {

  return (
    <ul>
    {productsList.map(function(product,index){
					return <li key={index} className="list-group-item">{product}
					<button className="btn btn-warning pull-right" onClick={()=>{deleteProduct(product)}}>x</button></li>;
				})}
    </ul>
  );
};