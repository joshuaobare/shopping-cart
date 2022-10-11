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
      
      let newarr = [...prevState] 
      const check = newarr.some(item => item.id === pet.id)
      
      if (check) {
        const index = newarr.findIndex(item => item.id === pet.id)
        newarr[index].number += 1
                
      }
      else {
        const newpet = pet
        newpet.number += 1        
        newarr.push(newpet)
      }
      
          
      return [...newarr]
    })
    
  } 

  console.log(cart)

  useEffect(() => {
    setPrice(() => {
      const newCart = [...cart]
      const num = newCart.reduce((prevItem, item) => {
        return prevItem += item.price
      },0)
      return num   
    })
    setItemCount(() => {
      const newCart = [...cart]
      const num = newCart.reduce((prevItem,item) => {
        return prevItem += item.number
      },0
    )
      return num
  })

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
