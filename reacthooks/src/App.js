import React, {Fragment, useState} from 'react';
import HeaderComponent from './components/Header.component'
import FooterComponent from './components/Footer.component';
import ProductComponent from './components/Product.component';

//import logo from './logo.svg';
// import './App.css';

function App() {

  const [products, setProducts] = useState([
    {id: 1, name:'Tshirt tommy', price:50},
    {id: 2, name:'Tshirt Nike', price:40},
    {id: 3, name:'Tshirt Adidas', price:30},
    {id: 4, name:'Tshirt Berlin', price:20}
  ]);

  const yearDate = new Date().getFullYear();

  return <Fragment>
      I am the App component
      <HeaderComponent
        title='Marketplace'
      ></HeaderComponent>

      <h1>Products List</h1>
      {products.map(product => (
        <ProductComponent
          key={product.id}
          productProp= {product}
        ></ProductComponent>  
      ))
      }

      
      <FooterComponent
        date={yearDate}
      ></FooterComponent>
    </Fragment>
}

export default App;
