import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  return (
    <div id="toy-collection">
      <ul>
        {toys.map(toy => (
          <ToyCard key={toy.id} {...toy} />
        ))}
      </ul>
    </div>
  );
}

export default ToyContainer;
