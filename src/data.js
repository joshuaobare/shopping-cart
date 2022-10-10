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
    type: "dog",
    src: SiberianHusky,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 3000,
  },
  {
    name: "Doberman",
    type: "dog",
    src: Doberman,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1500,
  },
  {
    name: "German Shepherd",
    type: "dog",
    src: GermanShepherd,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1200,
  },
  {
    name: "Golden Retriever",
    type: "dog",
    src: GoldenRetriever,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1005,
  },
  {
    name: "Scottish Fold",
    type: "dog",
    src: ScottishFold,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 2200,
  },
  {
    name: "Shetland Sheepdog",
    type: "dog",
    src: ShetlandSheepdog,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 2600,
  },
  {
    name: "Somali Cat",
    type: "cat",
    src: SomaliCat,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1900,
  },
  {
    name: "Sphynx Cat",
    type: "cat",
    src: SphynxCat,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1780,
  },
  {
    name: "Birman",
    type: "cat",
    src: Birman,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1600,
  },
  {
    name: "Tibetan Mastiff",
    type: "cat",
    src: TibetanMastiff,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1500,
  },
  {
    name: "Turkish Angora",
    type: "cat",
    src: TurkishAngora,
    desc: "",
    id: uniqid(),
    inBasket: false,
    price: 1330,
  },
];

export default data;
