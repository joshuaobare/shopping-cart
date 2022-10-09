import Card from "./components/Card"
import data from "./data"
import Navbar from "./components/Navbar"

function App() {

 const mydata = data.map(item => {
  return (
      <Card 
        name = {item.name}
        type = {item.type}
        src = {item.src}
        desc = {item.desc}
        id = {item.id}
        inBasket = {item.inBasket}
        price = {item.price}  
      
      />
      )
 }) 




  return (
    <div className="App">
      <Navbar />
      {mydata}
    </div>
  );
}

export default App;
