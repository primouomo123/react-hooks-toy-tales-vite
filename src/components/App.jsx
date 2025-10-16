import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/toys")
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {throw new Error("Failed to get toys");
      }
    })
    .then(setToys)
    .catch(error => console.error(error.message))
    .finally(() => setLoading(false))
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    setToys(previousToys => [...previousToys, newToy]);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>{showForm ? "Hide Toy Addition Form" : "Add a Toy"}</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
