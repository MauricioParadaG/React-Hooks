import React from 'react'

const ProductComponent = ({productProp}) => {

    const {id, name, price} = productProp;

    return (
    <div>
        <h2>{name}</h2>
        <p>${price}</p>
    </div>
    );
}

export default ProductComponent;
