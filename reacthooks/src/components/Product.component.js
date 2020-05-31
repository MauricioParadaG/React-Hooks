import React from 'react'

const ProductComponent = ({productProp, shoppingCartState, addProductCartState, productsState}) => {

    const {id, name, price} = productProp;

    const addToCart = (id) => {
        const product = productsState.filter(product => product.id === id)[0];
        //console.log(product);
        addProductCartState([
            ...shoppingCartState, 
            product
        ]);
    }

    return (
    <div>
        <h2>{name}</h2>
        <p>${price}</p>
        <button type="button" onClick={() => addToCart(id)}>Add To Cart</button>
    </div>
    );
}

export default ProductComponent;
