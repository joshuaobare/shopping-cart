import Card from "./Card"
import data from "../data"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar"

export default function Pets(props) {
    const [petData , setPetData] = useState([])
    const [heading , setHeading] = useState("")
    const {species} = useParams()
    
    useEffect(() => {
        const info = [...data]

        if(species === undefined) {
            setPetData(info)
            setHeading("Pets")
        } else if(species === "cats"){
            setPetData(() => info.filter(item => item.type === "Cat"))
            setHeading("Cats")
        } else if(species === "dogs"){
            setPetData(() => info.filter(item => item.type === "Dog"))
            setHeading("Dogs")
        }
        
    },[species])


    
    return (
        <div className="pets">
            <h1>{heading}</h1>
            <main>
            <Sidebar />            
            <div className="card-grid">
                {petData.map(item => {
                    return (
                        <Card
                        key = {item.id} 
                        name = {item.name}
                        type = {item.type}
                        src = {item.src}
                        desc = {item.desc}
                        id = {item.id}
                        inBasket = {item.inBasket}
                        price = {item.price}
                        handleClick = {() => props.addToCart(item)}
                        />
                        )
       })}
            </div>
            </main>
        </div>

        
    )
}