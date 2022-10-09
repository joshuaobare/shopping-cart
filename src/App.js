import Card from "./components/Card"
import data from "./data"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"

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
      <div className="card-grid">
        {mydata}
      </div>
      
      {/*<Homepage />*/}
    </div>
  );
}

export default App;
