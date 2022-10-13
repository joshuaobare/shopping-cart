import Card from "./Card"
import data from "../data"

export default function Pets(props) {
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
              handleClick = {() => props.addToCart(item)}
            />
            )
       })
    
    return (
        <div className="card-grid">
            {cards}
        </div>
    )
}