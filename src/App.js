import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayok = [ 'Rubel', 'Hero Alam', 'kasem', 'Jasim', 'Manna','Sakib Khan'];
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
  ]
  
  return (
    <div className="App">
      <header className="App-header">
       <p> I am a React Person</p>
       <Counter></Counter>
       <Users></Users>
       <ul>
          {
            nayok.map(nayok => <li> {nayok} </li>)
          }
       </ul>
       
       <ul>
       <h1> Products List:</h1>
         {
           products.map(product => <li> {product.name} </li>)
         }
       </ul>

       {
         products.map(product => <Product product={product}></Product> )
       }

      
       <Product product={products[0]}>  </Product>
       <Product product={products[1]}>  </Product>
       <Product product={products[2]}>  </Product>
        {
          nayok.map(nayok =>  <Person name={nayok} job="Herogiri"></Person>)
        }
        
      
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1> Count: {count} </h1>
      <button style={{marginRight:'10px'}} onClick={()=> setCount(count-1)}> Decrease </button>
      <button style={{margin:'10px'}} onClick={handleIncrease}> Increase </button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3> Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li> {user.name} </li>)
        }
      </ul>
    </div>
  )
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
