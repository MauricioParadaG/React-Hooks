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

    const deleteFromCart = (id) => {
        const products = shoppingCartState.filter(product => product.id !== id);
        addProductCartState(products);
    }
    
    return (
    <div>
        <h2>{name}</h2>
        <p>${price}</p>

        { productsState  ?
           <button type="button" onClick={() => addToCart(id)}>Add To Cart</button>
        :
            <button type="button" onClick={() => deleteFromCart(id)}>Delete</button>
        }
    </div>
    );
}

export default ProductComponent;
