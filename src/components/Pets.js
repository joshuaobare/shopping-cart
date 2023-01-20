import Card from "./Card"
import data from "../data"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Pets(props) {
    const [petData , setPetData] = useState([])
    const {species} = useParams()
    
    useEffect(() => {
        const info = [...data]

        if(species === undefined) {
            setPetData(info)
        } else if(species === "Cat"){
            setPetData(() => info.filter(item => item.type === "Cat"))
        } else if(species === "Dog"){
            setPetData(() => info.filter(item => item.type === "Dog"))
        }
        
    },[species])



    console.log(species)
    
    return (
        <div className="pets">
            <h1>Pets</h1>
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
        </div>

        
    )
}