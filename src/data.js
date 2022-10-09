import Doberman from "./pets/Doberman.jpg"
import GermanShepherd from "./pets/GermanShepherd.jpg"
import GoldenRetriever from "./pets/GoldenRetriever.jpg"
import ScottishFold from "./pets/ScottishFold.jpg"
import ShetlandSheepdog from "./pets/ShetlandSheepdog.jpg"
import SiberianHusky from "./pets/SiberianHusky.jpg"
import SomaliCat from "./pets/SomaliCat.jpg"
import SphynxCat from "./pets/SphynxCat.jpg"
import TabbyCat from "./pets/TabbyCat.jpg"
import TibetanMastiff from "./pets/TibetanMastiff.jpg"
import TurkishAngora from "./pets/TurkishAngora.jpg"
import uniqid from "uniqid"


const data = [
    {name:"Doberman",type:"dog",src: Doberman,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"German Shepherd",type:"dog",src: GermanShepherd,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"GoldenRetriever",type:"dog",src: GoldenRetriever,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"ScottishFold",type:"dog",src: ScottishFold,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"Shetland Sheepdog",type:"dog",src: ShetlandSheepdog,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"Siberian Husky",type:"dog",src: SiberianHusky,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"Somali Cat",type:"cat",src: SomaliCat,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"Sphynx Cat",type:"cat",src: SphynxCat,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"Tabby Cat",type:"cat",src: TabbyCat,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"Tibetan Mastiff",type:"cat",src: TibetanMastiff,desc:"",id: uniqid(),inBasket:false,price:""},
    {name:"Turkish Angora",type:"cat" ,src: TurkishAngora,desc:"",id: uniqid(),inBasket:false,price:""}
    
]

export default data