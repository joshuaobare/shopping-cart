import React , {useState} from "react"
import Card from "./components/Card"
import data from "./data"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"

function App() {

  const [cart , setCart] = useState([])

  const handler = (id) => {
    setCart(prevState => [...prevState,id])

  } 
  console.log(cart)

 const cards = data.map(item => {
  return (
      <Card
        key = {item.id} 
        name = {item.name}
        type = {item.type}
        src = {item.src}
        desc = {item.desc}
        id = {item.id}
        inBasket = {item.inBasket}
        price = {item.price}
        handleClick = {() => handler(item.id)}
      />
      )
 }) 

 


  return (
    <div className="App">
      <Navbar />
      <div className="card-grid">
        {cards}
      </div>
      
      {/*<Homepage />*/}
    </div>
  );
}

export default App;
