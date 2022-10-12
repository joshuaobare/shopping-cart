import CartItem from "./CartItem";

export default function Cart(props) {

    const cartItems = props.data.map(item => {
        return (
           <CartItem 
               name = {item.name}
               price = {item.price}
               src = {item.src}
               number = {item.number}
               total = {item.price * item.number}
               addCartCount = {() => props.addCartCount(item.id)}
               reduceCartCount = {() => props.reduceCartCount(item.id)}
           />
        )
      })

    return (
        <div>
            {cartItems}
        </div>
    )
}