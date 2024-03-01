import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpg' ,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo' ,
          category: 'chairs' ,
          price: '49.99',
        },
        {
          id: 2,
          title: 'Диван коричневый',
          img: 'sofa-brown.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi rem ullam qui dolorem facilis recusandae cupiditate eligendi voluptatum explicabo',
          category: 'sofas',
          price: '199.99',
          },
          {
          id: 3,
          title: 'Стол журнальный',
          img: 'table-wood.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum maiores non consequatur voluptates a recusandae, placeat modi.',
          category: 'tables',
          price: '79.99',
          },
          {
          id: 4,
          title: 'Письменный стол',
          img: 'desk.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio autem impedit quidem a rerum, repellat architecto atque cupiditate voluptatum',
          category: 'desks',
          price: '29.99',
          },
          {
          id: 5,
          title: 'Шкаф белый',
          img: 'cabinet-white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui autem porro debitis ea ex modi vero amet corporis nemo.',
          category: 'cabinets',
          price: '149.99',
          },
          {
          id: 6,
          title: 'Журнальный стол',
          img: 'desk-brown.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quisquam facilis ab, suscipit tempora ratione ipsam labore odio, a reprehenderit',
          category: 'sofas',
          price: '219.99',
          }      
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Items items={this.state.items} onAdd={this.addToOrder} />
      <Footer/>
    </div>
  );
}

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el =>  {
      if(el.id === item.id)
      isInArray=true;
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]}, 
    )
  }
}

export default App;
