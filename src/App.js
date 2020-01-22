import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MenuBar from './components/common/menuBar';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import Product from './components/product';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <MenuBar />
        <div className="App-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/product-details/:id" component={ProductDetails} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
