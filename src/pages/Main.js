import { useState, useEffect } from "react";
import { CardBox, Grid } from "./styled"
import cardsList from "../components/cardsList"
import BackCard from "../assets/YuGiOh.jpg"

const Main = () => {
  const [cards, setCards] = useState();

  const initialCards = cardsList?.map((e) => {
    return (
      <CardBox>
        <h5>{e.name}</h5>
        <img src={e.image} />
      </CardBox>
    )
  })

  const startGame = () => {
    return( 
      setCards(
        <CardBox>
        <img src={BackCard} />
        </CardBox>
      )
    )
  }

  useEffect(() => {
    startGame()
  }, [])

  return (
    <div>
      <button onClick={startGame}>Começar Jogo</button>
      <Grid>
        {initialCards}
      </Grid>
    </div>
  )

}

export default Main