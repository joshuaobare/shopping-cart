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
        <div className="cart">
            <h1>Shopping Cart</h1>
            <div className="cart-item-section">
                {cartItems}
            </div>
            <div className="cart-total-section">
                <div className="total">Total</div>
                <div className="total-price">${props.price}.00</div>
            </div>
            <button>Checkout (${props.price}.00)</button>
            
        </div>
    )
}