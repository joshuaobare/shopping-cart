import Card from "./Card"
import data from "../data"

export default function Pets(props) {
    const info = [...data]
    const cards = info.map(item => {
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
              handleClick = {() => props.addToCart(item)}
            />
            )
       })
    
    return (
        <div className="pets">
            <h1>Pets</h1>
            <div className="card-grid">
                {cards}
            </div>
        </div>

        
    )
}