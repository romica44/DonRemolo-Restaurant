import React from 'react'
import './App.css';
import './header.css'
import { NavLink } from "react-router-dom"
import { connect } from "redux-zero/react";
import CheckoutView from './checkout'
import { dishes, shopDishes } from './dishes';
import Footer from './footer'
import Header from './header'
import ShoppingCart from './shoppingCart';
import Checkout from './checkout';


let totalDishes = shopDishes.length;
let totalPrice = shopDishes.reduce(function (total, dish) {
    return total + (dish.price * dish.count);
}, 0);

const Enviado =  ({shopDishes}) => {
 return (
    <div id='application' >
        <div>
            <div id='wrapper'>
                <Header shopDishes={shopDishes} />
                    <div id='main-section'>
                        {shopDishes.length !== 0 ? <ShoppingCart shopDishes={shopDishes} /> : <div id='header'></div>}
                        <Checkout shopDishes={shopDishes} />
                    </div>
    <div>Su pedido será enviado por whatsapp
    </div>
    <img url='https://i.ibb.co/kcg8MQp/whatsapp.jpg'></img>
    <h1></h1>
    <NavLink to= {'https://api.whatsapp.com/send?phone=""&text= "Hola quiero el siguiente pedido'}>
    <span>{CheckoutView}</span>
    </NavLink>;
    </div> 
    </div> 
    <Footer/>
    </div>
    
 )}

 const mapToProps = ({shopDishes, CheckoutView}) => ({shopDishes, CheckoutView});
 export default connect(mapToProps)(Enviado);


