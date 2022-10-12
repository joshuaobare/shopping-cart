export default function CartItem(props) {
    return (
        <div className="cart-item">
            <img src={props.src} alt="" />
            <div>
                <div>{props.name}</div>
                <div>${props.price}</div>
                <div className="item-count">
                    <button onClick={props.reduceCartCount}>-</button>
                    <div>{props.number}</div>
                    <button onClick={props.addCartCount}>+</button>
                </div>
            </div>
        </div>
    )
}