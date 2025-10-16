import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, donateToy, likeToy }) {
  return (
    <div id="toy-collection">
      <ul>
        {toys.map(toy => (
          <ToyCard key={toy.id} {...toy} donateToy={donateToy} likeToy={likeToy} />
        ))}
      </ul>
    </div>
  );
}

export default ToyContainer;
