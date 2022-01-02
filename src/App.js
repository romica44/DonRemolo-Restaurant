import React from 'react';
import './App.css';
import ShoppingCart from './shoppingCart';
import Header from './header';
//import {pizzas, shopDishes} from './dishes'
import Home from './Home'
import { connect } from 'redux-zero/react';
import Footer from './footer';

const App = ({pizzas, shopDishes}) => {
  return (
    <div id='application' >
      <div>
        <div id='wrapper'>
          <Header shopDishes={shopDishes}/>
          <div id='main-section'> 
          <span id='pizzas'>LISTA DE PRODUCTOS</span>
            {shopDishes.length!==0?<ShoppingCart shopDishes={shopDishes} />:<div id='pizzas'></div>}
            <Home pizzas={pizzas} />
          </div>
         
        <Footer />
        </div>
      </div>
    </div >
  );
  //console.log("dish", pizzas);
}

const mapToProps = ({ pizzas, shopDishes }) => ({ pizzas, shopDishes });
export default connect(mapToProps)(App);