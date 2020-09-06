import React, { useState, useEffect, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

export const CategoryContext = createContext();

function App() {
  
  const [category, setCategory] = useState('Laptop');


  
  return (
    <CategoryContext.Provider value={[category, setCategory]} className="App">
      <header className="App-header">
       <p> I am a React Person</p>
       <Header/>
       
       <Home></Home>
       
      </header>
    </CategoryContext.Provider>
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





export default App;
