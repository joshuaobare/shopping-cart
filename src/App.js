import Card from "./components/Card"
import data from "./data"

function App() {

 const mydata = data.map(item => {
  return <Card name = {item.name}
     />
 }) 




  return (
    <div className="App">
      {mydata}
    </div>
  );
}

export default App;
