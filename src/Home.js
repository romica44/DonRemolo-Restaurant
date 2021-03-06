import React from 'react';
import { addDishes, moveSlides } from './actions'
import './App.css';
//import { pizzas,shopDishes} from './dishes';

const Lista_Dishes = ({ image, name, price, index, moveSlides }) => {
  return (
    <li className="products">
      <a className="chart" >
        <img className="main-image" src={image} alt=""/>
        <strong>{name}</strong>
        <span className="price">
          <span></span>
          <strong>${price}</strong>
        </span>
      </a>
      <button className="add-to-cart" onClick={() => addDishes(index)}>Agregar al carrito</button>
    </li>
  );
}
const Home = ({pizzas, shopDishes}) => {

  const listaComponent = pizzas.map((item, index) => {
    return <Lista_Dishes
      key={index}
      image={item.image}
      name={item.name}
      price={item.price}
      index={index}
      moveSlides={() => moveSlides(index)}
    />
  })
  return (<section id="content">
    <div>
      <ul className="k-widget k-listview">
        {listaComponent}
      </ul>
    </div>
  </section>)
}



export default Home;