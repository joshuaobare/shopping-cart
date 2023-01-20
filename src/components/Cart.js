import CartItem from "./CartItem";

export default function Cart(props) {

    const cartItems = props.data.map(item => {
        return (            
           <CartItem
               key = {item.id} 
               name = {item.name}
               price = {item.price}
               src = {item.src}
               number = {item.number}
               total = {item.price * item.number}
               addCartCount = {() => props.addCartCount(item.id)}
               reduceCartCount = {() => props.reduceCartCount(item.id)}
               type = {item.type}
           />
        )
      })

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <div className="cart-check">
                {!props.data.length ? "Your Cart Is Empty" : ""}
            </div>
            <div className="cart-item-section">
                {cartItems}                
            </div>
            <hr />
            <div className="cart-total-section">
                <div className="total">TOTAL PRICE </div>
                <div className="total-price">${props.price}.00</div>
            </div>
            <button className="checkout-button">CHECKOUT (${props.price}.00)</button>
            
        </div>
    )
}