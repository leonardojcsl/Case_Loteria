import { Card } from "@mui/material";
import { useState } from "react";
import cardsList from "../components/cardsList";
import BasicGrid from "../components/Grid";
import { CardBox, Item } from "./styled";

const Main = () => {
  const [cards, setCards] = useState(cardsList);

  const cardsInfos = cards?.map((e) => {
    return (
      <CardBox>
        <p>{e.name}</p>
        <img src={e.image} />
        <p>{e.meaning}</p>
      </CardBox>
    )
  })
  return (
    <div>
      <BasicGrid/>
    </div>
  )

}

export default Main