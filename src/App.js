import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Items from "./items";
import Categories from "./components/categories";
import ShowFullItem from "./showFullItem";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      orders:[],
      categories:[],
      items:[{
         id:1,
         title:'Стул серый',
         img:'стул4.jpg',
         desc:'lorem lorem ipsum',
         category:'chairs',
         price:'49.99',
         priceTotal:1,
         count:1
      },
      {
        id:2,
        title:'Стол',
        img:'стол.jpg',
        desc:'lorem lorem ipsum',
        category:'tables',
        price:'492.99',
        priceTotal:'492.99',
        count:1
     },
     {
      id:3,
      title:'Стол',
      img:'стол.jpg',
      desc:'lorem lorem ipsum',
      category:'tables',
      price:'492.99',
      priceTotal:'492.99',
      count:1
   },
     {
      id:4,
      title:'Диван',
      img:'диван.jpg',
      desc:'lorem lorem ipsum',
      category:'sofa',
      price:'439.99',
      priceTotal:'439.99',
      count:1
   },
   {
    id:5,
    title:'Диван',
    img:'диван.jpg',
    desc:'lorem lorem ipsum',
    category:'sofa',
    price:'439.99',
    priceTotal:'439.99',
    count:1
 },
   {
    id:6,
    title:'Светильник',
    img:'светильник.jpg',
    desc:'lorem lorem ipsum',
    category:'light',
    price:'45.99',
    priceTotal:'45.99',
    count:1
 },
 {
  id:7,
  title:'Светильник',
  img:'светильник.jpg',
  desc:'lorem lorem ipsum',
  category:'light',
  price:'45.99',
  priceTotal:'45.99',
  count:1
},
 {
  id:8,
  title:'Стул голубой',
  img:'стул4.jpg',
  desc:'lorem lorem ipsum',
  category:'chairs',
  price:'32.99',
  priceTotal:'32.99',
  count:1
},
{
  id:9,
  title:'Стул зеленый',
  img:'стул4.jpg',
  desc:'lorem lorem ipsum',
  category:'chairs',
  price:'229.99',
  priceTotal:'229.99',
  count:1
},
    ],
    showFullTem:false,
    fullItem:{},
   countOrders:[],
    }
    this.state.categories=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder=this.deleteOrder.bind(this)
    this.chooseOrders=this.chooseOrders.bind(this)
    this.onShowItem=this.onShowItem.bind(this)
    this.chancheCount=this.chancheCount.bind(this)
    this.anChancheCount=this.anChancheCount.bind(this)
  }
  render (){
   
    return(
    <div className="wrapper">
      <Header anChancheCount={this.anChancheCount} chancheCount={this.chancheCount} countOrders={this.state.countOrders}  orders ={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories onChoose={this.chooseOrders} />
      <Items  onShowItem={this.onShowItem} items={this.state.categories} onAdd={this.addToOrder}/>
      {this.state.showFullTem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
    </div>
    )
} 
onShowItem (item){
  this.setState({fullItem:item})
this.setState({showFullTem:!this.state.showFullTem})
}

chancheCount(item){
  console.log({...item,count:item.count})
  const updatedItem = { ...item, count: item.count + 1 }
  
  this.setState({
    orders:[...this.state.orders.map( el => el.id ===item.id ? updatedItem : el )]})
}



anChancheCount(item){
  const updatedItem = { ...item, count: item.count - 1 } 
  if(item.count >1){
  
  console.log(this.state.orders)
  this.setState({orders:[...this.state.orders.map( el => el.id ===item.id ? updatedItem : el )]}) }
}

addToOrder(item,id){
  
  
  let isInArray = false
  
  this.state.orders.forEach( el =>{
    if(el.id===item.id)
    
  
    isInArray = true
  })

  if(!isInArray)
this.setState({orders:[...this.state.orders,item]})
}
chooseOrders(category){
  if(category === 'all'){ 
    this.setState({categories:this.state.items})
    return
  }
  else{
this.setState({
  categories:this.state.items.filter(el => el.category===category) } )
 }
}
deleteOrder(id){
this.setState({orders:this.state.orders.filter(el => el.id!==id)})
}
}

export default App;
