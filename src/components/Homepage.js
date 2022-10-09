import Navbar from "./Navbar"

export default function Homepage() {
    return (
        <div className="homepage">
            <Navbar />
            <main>
                <h1>Welcome to Pet Store</h1>
                <div>No Friends? Buy A Friend</div>
                <button>Shop Now</button>
            </main>
        </div>
    )
}