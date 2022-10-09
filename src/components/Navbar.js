import Paw from "../pets/PawPrint.png"

export default function Navbar() {
    return (
        <nav>
            <div className="nav-heading">
                <img src={Paw} alt="Pet store logo" />
                <h1 className="">Pet Store</h1> 
            </div>
            <ul>
                <li>Home</li>
                <li>Pets</li>
                <li>Basket</li>
            </ul>
        </nav>
    )
}