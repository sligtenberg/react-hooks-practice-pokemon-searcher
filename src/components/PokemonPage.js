import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [cards, setCards] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(setCards)
  }, [])

  const cardsToDisplay = cards.filter(card => searchInput === "" ? true : card.name.toLowerCase().includes(searchInput.toLowerCase()))

  function addCard(newCard) {
    setCards([...cards, newCard])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addCard={addCard}/>
      <br />
      <Search setSearchInput={setSearchInput}/>
      <br />
      <PokemonCollection cards={cardsToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
