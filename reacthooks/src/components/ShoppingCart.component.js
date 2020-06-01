import React from 'react'
import './shoppingCart.component.css'
import ProductComponent from './Product.component'

const ShoppingCartComponent = ({shoppingCartState, addProductCartState}) => (
        <div className="shoppingCart">
            <h2>Shopping Cart</h2>

            {shoppingCartState.length === 0 ?
                <p>There are not elements in the Shopping Cart</p>

            : shoppingCartState.map(product =>(
                <ProductComponent
                    key={product.id}
                    productProp={product}
                    shoppingCartState={shoppingCartState}
                    addProductCartState={addProductCartState}
                />
            ))

            }

        </div>
    );

export default ShoppingCartComponent
