import React from 'react';

const CategoryDetail = (props) =>  {
    const {name} = props.product;
    return (
        <div>
           
            <h4> Product Brand Name: {name} </h4>
        </div>
    );
};

export default CategoryDetail;