import { cardsList } from "./cardsList";

export const Main = () => { 
    const [cards, setCards] = useState(cardsList);
         
 
    const shuffle = () => {
      const newCards = [...cards];
      for (let i = newCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
      }
      setCards(newCards);
    };
}

const pageElements = cards.map((e) => {
    const title = e.name;
    const text = e.meaning;
    const img = e.image;