import {Link} from "react-router-dom"

export default function Homepage() {
    return (
        <div className="homepage">
            
            <main>
                <h1>Welcome to Pet Store</h1>
                <div>No Friends? Buy A Friend</div>
                <Link to = "/pets">
                    <button className="btn">Shop Now</button>
                </Link>
                
            </main>
        </div>
    )
}