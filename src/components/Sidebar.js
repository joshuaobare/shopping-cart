import {Link} from "react-router-dom"

export default function Sidebar(){
    return(
        <div className="Sidebar">
            <Link to={"/pets"}><div>All Pets</div></Link>
            <Link to={"/pets/Dog"}><div>Dogs</div></Link>
            <Link to={"/pets/Cat"}><div>Cats</div></Link>
            
            
            
        </div>
    )
}