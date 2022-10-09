import Card from "./components/Card"
import data from "./data"

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
      {mydata}
    </div>
  );
}

export default App;
