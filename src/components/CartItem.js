export default function CartItem(props) {
    return (
        <div className="cart-item">
            <img className="cart-img" src={props.src} alt="" />
            <div className="cart-item-right">
                <div className="cart-item-name">{props.name}</div>
                <div className="cart-item-type">{props.type}</div>
                <div className="cart-item-price">${props.price}</div>
                <div className="item-count">
                    <button onClick={props.reduceCartCount}>-</button>
                    <div>{props.number}</div>
                    <button onClick={props.addCartCount}>+</button>
                </div>
            </div>
        </div>
    )
}