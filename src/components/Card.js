export default function Card(props) {
    return (
        <div className="pet-card">
            <h2>{props.name}</h2>
            <img src={props.src} alt={props.type} className="pet-img" />
            <div>${props.price}</div>
            <button onClick={props.handleClick} className="btn" >Add To Cart</button>
        </div>
    )
}