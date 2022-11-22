import { useState } from "react";
import cardsList from "./cardsList";
import styled from "styled-components";

const MainDiv = styled.div `
  border: 2px solid red;
  display: flex;
  flex-direction: column;
`

const CardDiv = styled.div`
    border: 1px solid black;
    display: flex;
`

const Main = () => {
  const [cards, setCards] = useState(cardsList);
  
  const cardsInfos = cards?.map((e) => {
    return (
    <CardDiv>
      <p>{e.name}</p>
      <img src={e.image}/>
      <p>{e.meaning }</p>
    </CardDiv>    
    )
  }) 

  return (
    <MainDiv>
    {cardsInfos}  
    </MainDiv>
  )
}


export default Main