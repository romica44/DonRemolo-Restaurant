import createStore from 'redux-zero'
import {pizzas, shopDishes, selectedFood} from './dishes'

const initialState = {
   pizzas: pizzas,
   shopDishes: shopDishes,
   selectedFood: 0,
}

const store = createStore(initialState)
export default store