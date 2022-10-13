import Paw from "../pets/PawPrint.png"
import {Link} from "react-router-dom"

export default function Navbar(props) {
    return (
        <nav>
            <div className="nav-heading">
                <img src={Paw} alt="Pet store logo" />
                <h1 >Pet Store</h1> 
            </div>
            <ul>
                <Link to = "/">
                    <li>Home</li>
                </Link>
                <Link to = "/pets">
                    <li>Pets</li>
                </Link>
                <Link to = "/cart">
                    <li className="li-cart">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {!props.items ? "" : <span className="nav-item-count">{props.items}</span>}
                    </li>
                </Link>
                
            </ul>
        </nav>
    )
}