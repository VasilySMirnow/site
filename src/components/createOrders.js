import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa6'
export class CreateOrders extends Component {
  
  render()
   {
   
    return (
      <div>
         <img src={"./img/" + this.props.item.img}></img>
              <h2>{this.props.item.title}</h2>
              <b>{this.props.item.price}$</b>
               <span className='minus-item' onClick={() => this.props.anChancheCount(this.props.item)}>-</span>
            <span className='count-item'>{this.props.item.count}</span>
               <span className='plus-item'  onClick={() => this.props.chancheCount(this.props.item)}>+</span>
              <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
              </div>
    )
  }
}

export default CreateOrders