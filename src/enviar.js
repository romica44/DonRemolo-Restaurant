import React from 'react'
import './App.css';
import './header.css'
//import { NavLink } from "react-router-dom"
import { connect } from "redux-zero/react";
import { dishes, shopDishes } from './dishes';
import Checkout from './checkout';
import Header from './header';


// let totalDishes = shopDishes.length;
// let totalPrice = shopDishes.reduce(function (total, dish) {
//     return total + (dish.price * dish.count);
// }, 0);

const Enviado =  ({shopDishes}) => {
 return (
    
    <div id='application' >
        <div id='wrapper'>
           <div id='main-section'>
             <div class="content-page">
               <div class="row mt-5 mb-5">    
                    <div class="col-12 col-md-6">
                    <form><Checkout shopDishes={shopDishes} /> </form>
                    <form action="#" method="post" class="needs-validation row-small-800" novalidate>
                       <div class="mb-3">
                          <input type="text" class="form-control rounded-pill text-start" id="email" aria-describedby="emailHelp" placeholder="Nombres" required />
                            <div class="invalid-feedback">
                            El nombre completo es requerido
                            </div>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control rounded-pill text-start" id="email" aria-describedby="emailHelp" placeholder="Correo electrónico" required />
                            <div class="invalid-feedback">
                            El email es requerido
                            </div>
                        </div>
                        <div class="mb-3">
                            <input type="tel" class="form-control rounded-pill text-start" id="exampleInputPassword1" placeholder="Celular" required />
                            <div class="invalid-feedback">
                            El celular es requerido
                            </div>
                        </div>
                        <div class="mb-3">
                            <textarea name="consulta" id="consulta" cols="30" rows="4" class="form-control text-start" placeholder="Su mensaje"></textarea>
                        </div>
                        <div class="d-flex justify-content-center mt-5">
                            <button type="submit" class="btn btn-default rounded-pill p-3 ps-5 pe-5 custom-btn">ENVIAR</button>
                        </div>
                    </form>
                    </div>
                </div>   
             </div>
                    
            </div>
        </div>
    </div>
 )}
 

 const mapToProps = ({shopDishes, CheckoutView}) => ({shopDishes, CheckoutView});
 export default connect(mapToProps)(Enviado);


