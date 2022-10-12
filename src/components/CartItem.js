export default function CartItem(props) {
    return (
        <div className="cart-item">
            <img src={props.src} alt="" />
            <div>
                <div>{props.name}</div>
                <div>${props.price}</div>
                <div className="item-count">
                    <button>-</button>
                    <div>{props.number}</div>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}