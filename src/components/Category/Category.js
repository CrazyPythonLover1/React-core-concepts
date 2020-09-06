import React, { useContext, useEffect } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { useState } from 'react';
import { CategoryContext } from '../../App';


const allProducts = [
    {name:'Photoshop', price:'$90.99',category:'software'},{name:'Illustrator', price:'$60.99',category:'software'},
    {name:'PDF Reader', price:'$6.99',category:'software'},
    {name:'Asus', price:'$90.99',category:'laptop'},{name:'Dell', price:'$60.99',category:'laptop'},
    {name:'Apple', price:'$6.99',category:'laptop'},
    {name:'Samsung', price:'$90.99',category:'Mobile'},{name:'Apple', price:'$60.99',category:'Mobile'},
    {name:'Xaomi', price:'$6.99',category:'Mobile'},
]


const Category = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    },[category])
    return (
        <div>
            <h3> Your Selected category: {category} </h3>
            {
                products.map(pd => <CategoryDetail product={pd} > </CategoryDetail>)
            }
            
        </div>
    );
};

export default Category;