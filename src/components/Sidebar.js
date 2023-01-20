import {Link} from "react-router-dom"

export default function Sidebar(){
    return(
        <div className="Sidebar">
            <h2>Shop</h2>
            <div className="sidebar-items">
            <Link to={"/pets"}><div className="sidebar-item">All Pets</div></Link>
            <Link to={"/pets/dogs"}><div className="sidebar-item">Dogs</div></Link>
            <Link to={"/pets/cats"}><div className="sidebar-item">Cats</div></Link>
            </div>
            
            
            
            
        </div>
    )
}