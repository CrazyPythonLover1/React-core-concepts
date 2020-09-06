import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {

    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1> Header category: {category} </h1>
            <button onClick={()=>setCategory("Laptop")} style={{margin:"10px"}}> Laptop</button> 
            <button onClick={()=> setCategory("Mobile")} style={{margin:"10px"}} > Mobile </button> 
            <button onClick={()=> setCategory("Software")} style={{margin:"10px"}}> Software </button>

        </div>
    );
};

export default Header;