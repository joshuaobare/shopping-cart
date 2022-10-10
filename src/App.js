import React , {useState , useEffect} from "react"
import Card from "./components/Card"
import data from "./data"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"

function App() {

  const [cart , setCart] = useState([])
  const [price , setPrice] = useState(0)

  const handler = (pet) => {
    setCart(prevState => [...prevState,pet])
    
  } 

  useEffect(() => {
    setPrice(() => {
      return cart.reduce((prevItem, item) => {
        return prevItem += item.price
      },0)
         
    })
  },[cart])

  console.log(cart)
  console.log(price)

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
        handleClick = {() => handler(item)}
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
