import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ cards }) {
  const cardComponents = cards.map(card => <PokemonCard key={card.id} card={card}/>)
  
  return (
    <Card.Group itemsPerRow={6}>
      {cardComponents}
    </Card.Group>
  );
}

export default PokemonCollection;
