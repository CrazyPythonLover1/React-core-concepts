import React, { useContext, useEffect } from 'react';
import Product from '../Product/Product';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';
import { useState } from 'react';

const allProducts = [
  {name:'Photoshop', price:'$90.99',category:'software'},{name:'Illustrator', price:'$60.99',category:'software'},
  {name:'PDF Reader', price:'$6.99',category:'software'},
  {name:'Asus', price:'$90.99',category:'laptop'},{name:'Dell', price:'$60.99',category:'laptop'},
  {name:'Apple', price:'$6.99',category:'laptop'},
  {name:'Asus', price:'$90.99',category:'Mobile'},{name:'Dell', price:'$60.99',category:'Mobile'},
  {name:'Apple', price:'$6.99',category:'Mobile'},
]

const Home = () => {

  const [category] = useContext(CategoryContext);
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    const matchedProducts = allProducts.filter(pd=> pd.category.toLowerCase()===category.toLowerCase());
    setProducts(matchedProducts);
  },[category])

    return (
        <div>
            <h1> Home:  </h1>
            
            <Category></Category>
       {
         products.map(product => <Product product={product}></Product> )
       }

       
        </div>
    );
};

export default Home;