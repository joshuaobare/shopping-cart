import React , {useState , useEffect} from "react"
import Card from "./components/Card"

import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import CartItem from "./components/CartItem"
import Cart from "./components/Cart"
import {BrowserRouter as Router , Switch, Route} from "react-router-dom"
import Pets from "./components/Pets"

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
        return prevItem += (item.price * item.number)
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

  
 
 
 

 


  return (
    <Router>
      <div className="App">
      <Navbar items ={itemCount}/>
      <Cart data = {cart} 
            addCartCount= {addCartCount} 
            reduceCartCount = {reduceCartCount}
            price = {price}
      />
      
      <Pets addToCart={addToCart}/>
      
      {/*<Homepage />*/}
    </div>
    </Router>
    
  );
}

export default App;
