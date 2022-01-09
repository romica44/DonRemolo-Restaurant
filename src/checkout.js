import React  from 'react';
import './App.css';
import { connect } from "redux-zero/react";
import Footer from './footer';
import Header from './header';
import ShoppingCart from './shoppingCart';
import { deleteAll } from './actions';


const Checkout = ({ shopDishes }) => {
    const Listdishs = shopDishes.map((item, index) => {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div class="cart-image-wrapper">
                                <img src={item.image} alt=""/></div>
                            <span class="product-name" data-bind="text: item.name">{item.name}</span>
                        </td>
                        <td><input type="number" class="inputnumber k-widget k-numerictextbox" name="lastname" value={item.count} /></td>
                        <td>
                            <p class="table-price" data-bind="text: itemPrice"> ${item.price}</p><p></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        );

    });

    function completeAndRedirect(){
        alert('Su pedido fue enviado. En breve lo contactararemos');
     
    }

    let totalDishes = shopDishes.length;
    let totalPrice = shopDishes.reduce(function (total, dish) {
        return total + (dish.price * dish.count);
    }, 0);

    console.log("lis", Listdishs)
    console.log("lis", shopDishes)
    // primera vista
    return (
        <section id="content" className="style section-final" >
            <div>
                <div></div>
                <div id="details-checkout">
                    <h1>Detalle de tu pedido</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th></th>
                                <th>Cantidad</th>
                                <th className="text-right">Precio</th>
                            </tr>
                        </thead>
                    </table>
                    {Listdishs}
                    <p id="total-checkout"><em>total:</em>
                        <span data-bind="text: totalPrice">${totalPrice}</span>
                    </p>
                    
            <div class="d-flex justify-content-center mt-5">
                <div class="row mt-5 mb-5"><h1 class="font-title">Registre sus datos</h1>  
                    <div class="col-12 col-md-6">
                    <form class="needs-validation row-small-800" novalidate>
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
                        <div class="d-flex justify-content-center mt-5" id="buttons">
                        <form action="" method="post">
                        <button Onclick={completeAndRedirect()} type="submit" class="btn btn-default rounded-pill p-3 ps-5 pe-5 custom-btn">ENVIAR</button>
                        </form>
                        <form action="/#" >
                        <button type="submit" class="btn btn-default rounded-pill p-3 ps-5 pe-5 custom-btn">CANCELAR</button>
                        </form>
                        </div>
                    </form>
                    </div>
                </div>   
             </div>              
    </div>
            <div id="checkout-bottom-image"></div>
            </div>
        </section>
    )
}

const CheckoutView = ({ shopDishes }) => {
    return (
        <div id='application' >
            <div>
                <div id='wrapper'>
                    <Header shopDishes={shopDishes} />
                    <div id='main-section'>
                        {shopDishes.length !== 0 ? <ShoppingCart shopDishes={shopDishes} /> : <div id='header'></div>}
                        <Checkout shopDishes={shopDishes} />
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

const mapToProps = ({shopDishes}) => ({shopDishes});
export default connect(mapToProps)(CheckoutView);
