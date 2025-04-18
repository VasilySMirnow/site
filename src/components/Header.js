import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './order';
const showOrders = (props) => {
  let summ = 0;
  props.orders.forEach(el => {
    summ += Number.parseFloat(el.price)
  });
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summ'>Сумма: {new Intl.NumberFormat().format(summ)}$</p>
  </div>)
}

const showNothing = () => {
  return(
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}
export default function Header(props) {
  let [cartOpen,setCartOpen] =useState(false)
  return (
  <header>
    <div>
        <span className='logo'>House staff</span>
        <ul className='nav'>
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
        </ul>
        <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
          {cartOpen && (
            <div className='shop-cart'>
             {props.orders.length > 0 ? 
             showOrders(props) :showNothing() }
            </div>
          )}
    </div>
    <div className='presentation'></div>
  </header>
  )
}
