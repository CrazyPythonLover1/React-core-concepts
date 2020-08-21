import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const Nayok = [ 'Rubel', 'Hero Alam', 'kasem', 'Jasim', 'Manna'];
  return (
    <div className="App">
      <header className="App-header">
       <p> I am a React Person</p>
        <Person name={Nayok[0]} job="Herogiri"></Person>
        <Person name={Nayok[1]} job="Dadagiri"></Person>

      
      </header>
    </div>
  );
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
