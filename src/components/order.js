import React, { Component } from 'react'

import CreateOrders from './createOrders'

export class Order extends Component {
  

  render() {
    
    
    return (
     
      <div className='item'>
          <CreateOrders onDelete={this.props.onDelete} anChancheCount={this.props.anChancheCount} chancheCount={this.props.chancheCount} item={this.props.item} />
        
      </div>
    )
  }
}

export default Order