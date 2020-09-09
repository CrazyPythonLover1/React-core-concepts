import React, { useState, useEffect, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';


// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// 
// firebase.initializeApp(firebaseConfig);


export const CategoryContext = createContext();

function App() {
  
  const [category, setCategory] = useState('Laptop');

// sign in signout
//     const [user, setUser] = useState({
//     isSignedIn: false,
//     name: '',
//     email: '',
//     photo: '',
//    })
// 
//   const provider = new firebase.auth.GoogleAuthProvider();
//   const handleSignIn  = () => {
//     firebase.auth().signInWithPopup(provider)
//     .then((result) => {
//       var token = result.credential.accessToken;
//       var {displayName,email,photoURL} = result.user;
// 
//       const signInUser = {
//         isSignedIn: true,
//         name: displayName,
//         email: email,
//         photo:photoURL
//       }
// 
//       setUser(signInUser);
//     })
// 
//   }
// 
//   const handleSignOut = () => {
//     firebase.auth().signOut()
//      .then((result) => {
//       const signedOutUser = {
//         isSignedIn: false,
//         name: '',
//         email: '',
//         photo: '',
//       }
//       setUser(signedOutUser);
//      })
//      .catch((error) => {
//        console.log(error)
//      })
//      
//   }
  
  return (
    <CategoryContext.Provider value={[category, setCategory]} className="App">
    
//     {
//         user.isSignedIn?<button onClick={ handleSignOut}> signUp  </button> :
//          <button onClick={ handleSignIn}> Login  </button>
//       }
//       {
//         user.isSignedIn && <div>
//           <h3> Name: user.name</h3>
//           <h5> Email: user.email</h5>
//           <img src={user.photo} alt=" There is no img "/>
//         </div>
//       }
//     
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
