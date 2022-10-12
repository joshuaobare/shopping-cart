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

  const addToCart = (pet) => {    
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

  const addCartCount = (id) => {
      setCart(prevState => {
        const newCart = [...prevState].map(item => {
          if (item.id === id) {
            return {...item , number: item.number + 1}
          } else {
            return item
          }
        })
        return newCart
      })
  }

  const reduceCartCount = (id) => {
    setCart(prevState => {
      const newCart = [...prevState].map(item => {
        if (item.id === id) {          
          return {...item , number: item.number - 1}
                   
        }else {
          return item
        }
      })

      const index = newCart.findIndex(item => item.number === 0)
      if (index !== -1){
        newCart.splice(index,1)
      }     
      return newCart
    })
  }

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
        handleClick = {() => addToCart(item)}
      />
      )
 })
 
 const cartItems = cart.map(item => {
   return (
      <CartItem 
          name = {item.name}
          price = {item.price}
          src = {item.src}
          number = {item.number}
          total = {item.price * item.number}
          addCartCount = {() => addCartCount(item.id)}
          reduceCartCount = {() => reduceCartCount(item.id)}
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
