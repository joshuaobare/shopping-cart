import Doberman from "./pets/Doberman.jpg";
import GermanShepherd from "./pets/GermanShepherd.jpg";
import GoldenRetriever from "./pets/GoldenRetriever.jpg";
import ScottishFold from "./pets/ScottishFold.jpg";
import ShetlandSheepdog from "./pets/ShetlandSheepdog.jpg";
import SiberianHusky from "./pets/SiberianHusky.jpg";
import SomaliCat from "./pets/SomaliCat.jpg";
import SphynxCat from "./pets/SphynxCat.jpg";
import Birman from "./pets/Birman.jpg";
import TibetanMastiff from "./pets/TibetanMastiff.jpg";
import TurkishAngora from "./pets/TurkishAngora.jpg";
import uniqid from "uniqid";

const data = [
  {
    name: "Siberian Husky",
    type: "Dog",
    src: SiberianHusky,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 3000,
    number: 0
  },
  {
    name: "Tibetan Mastiff",
    type: "Dog",
    src: TibetanMastiff,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1500,
    number: 0
  },
  
  {
    name: "German Shepherd",
    type: "Dog",
    src: GermanShepherd,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1200,
    number: 0
  },
  {
    name: "Golden Retriever",
    type: "Dog",
    src: GoldenRetriever,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1005,
    number: 0
  },
  {
    name: "Scottish Fold",
    type: "Cat",
    src: ScottishFold,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 2200,
    number: 0
  },
  {
    name: "Shetland Sheepdog",
    type: "Dog",
    src: ShetlandSheepdog,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 2600,
    number: 0
  },
  {
    name: "Somali Cat",
    type: "Cat",
    src: SomaliCat,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1900,
    number: 0
  },
  {
    name: "Sphynx Cat",
    type: "Cat",
    src: SphynxCat,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1780,
    number: 0
  },
  {
    name: "Birman",
    type: "Cat",
    src: Birman,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1600,
    number: 0
  },
  {
    name: "Doberman",
    type: "Dog",
    src: Doberman,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1500,
    number: 0
  },
  
  {
    name: "Turkish Angora",
    type: "Cat",
    src: TurkishAngora,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1330,
    number: 0
  },
];

export default data;
