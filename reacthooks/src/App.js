import React, {Fragment} from 'react';
import HeaderComponent from './components/Header.component'
import FooterComponent from './components/Footer.component';

//import logo from './logo.svg';
// import './App.css';

function App() {

  const yearDate = new Date().getFullYear();

  return <Fragment>
      I am the App component
      <HeaderComponent
        title='Marketplace'
      ></HeaderComponent>
      <FooterComponent
        date={yearDate}
      ></FooterComponent>
    </Fragment>
}

export default App;
