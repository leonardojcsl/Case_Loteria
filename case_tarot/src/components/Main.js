import { useState } from "react";
import cardsList from "./cardsList";

const Main = () => {
  const [cards, setCards] = useState(cardsList);
  
  const cardsNames = cards?.map((e) => {
    return (
    <div>
      <p>{e.name}</p>
    </div>
    
    )
  })

  return (
    <div>{cardsNames}</div>
  )
}


export default Main