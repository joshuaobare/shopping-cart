import React , {useState , useEffect} from "react"
import Card from "./components/Card"
import data from "./data"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import CartItem from "./components/CartItem"

function App() {

  const [cart , setCart] = useState([])
  const [price , setPrice] = useState(0)
  const [itemCount , setItemCount] = useState(0)

  const handler = (pet) => {
    setCart(prevState => {
      
      let x = {...pet, number: pet.number + 1}
      let newarr = [...prevState, x]
      
      let output = []
      
      newarr.forEach(item => {
        const existing = output.filter(v => {
          return v.id === item.id;
        });
        if (existing.length) {
          const existingIndex = output.indexOf(existing[0]);
          
          output[existingIndex].number += 1;
          console.log(output[existingIndex].number)
        } else {
          output.push(item);
        }
        });
    
      return output
    })
    
  } 

  console.log(cart)

  useEffect(() => {
    setPrice(() => {
      return cart.reduce((prevItem, item) => {
        return prevItem += item.price
      },0)
         
    })
    setItemCount(() => {
      return cart.reduce((prevItem,item) => {
        return prevItem += item.number
      },0
    )})

  },[cart])

  
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
 
 const cartItems = cart.map(item => {
   return (
      <CartItem 
          name = {item.name}
          price = {item.price}
          src = {item.src}
      />
   )
 })

 


  return (
    <div className="App">
      <Navbar items ={itemCount}/>
      <div className="card-grid">
        {cards}
      </div>
      <div>
        {cartItems}
      </div>
      
      {/*<Homepage />*/}
    </div>
  );
}

export default App;
