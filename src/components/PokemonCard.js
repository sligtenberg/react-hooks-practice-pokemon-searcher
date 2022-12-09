import React, {useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ card }) {
  const [front, setFront] = useState(true)

  function toggleCard() {
    setFront(!front)
  }

  return (
    <Card onClick={toggleCard}>
      <div>
        <div className="image">
          <img alt="oh no!" src={front ? card.sprites.front : card.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{card.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {card.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
