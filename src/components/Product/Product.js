import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

function Product(props){
  
    const productStyle={
      color: 'tomato',
      border:'1px solid gray',
      borderRadius: '10px',
      backgroundColor: 'lightgray',
      height: '250px',
      width: '220px',
      margin:'10px',
      float: 'left',
      textAlign: 'center'
    }
    const {name, price,category} = props.product
    return (
      <div style={productStyle}>
        
        <h3>{name} </h3>
        <h5> {price} </h5>
        <p> {category}</p>
        <button>Buy now</button>
      </div>
    )
  };
  
export default Product;