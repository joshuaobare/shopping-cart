export default function Card(props) {
    return (
        <div className="pet-card">
            <h1>{props.name}</h1>
            <img src={props.src} alt={props.type} className="pet-img" />
            <div>{props.price}</div>
        </div>
    )
}