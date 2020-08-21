import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const Nayok = [ 'Rubel', 'Hero Alam', 'kasem', 'Jasim', 'Manna'];
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
  ]
  
  return (
    <div className="App">
      <header className="App-header">
       <p> I am a React Person</p>
       <Product product={products[0]}>  </Product>
       <Product product={products[1]}>  </Product>
       <Product product={products[2]}>  </Product>
        
        <Person name={Nayok[0]} job="Herogiri"></Person>
        <Person name={Nayok[1]} job="Dadagiri"></Person>
        <Person name={Nayok[3]} job="Kamla"></Person>

      
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    color: 'tomato',
    border:'1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '250px',
    margin:'10px',
    float: 'left',
  }
  const {name, price} = props.product
  return (
    <div style={productStyle}>
      <h3>{name} </h3>
      <h5> {price} </h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  console.log(props);
  const personStyle = {
    border: '2px solid tomato',
    padding: '10px',
    width: '400px',
    margin:'10px',
  }
  return (
    <div style={personStyle}>
      <h1> Name: {props.name} </h1>
      <h3> Job: {props.job} </h3>
    </div>
  )
}

export default App;
