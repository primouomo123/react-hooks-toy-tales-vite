import React from "react";

function ToyCard({ id, name, image, likes, donateToy, likeToy }) {
  function handleDonate() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(r => {
      if (r.ok) {
        donateToy(id);
      } else {throw new Error("Failed to donate the toy")}
    })
    .catch(error => console.error(error.message))
  }

  function handleLikeToy() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: likes + 1 })
    })
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {throw new Error("Failed to like the toy")}
    })
    .then(updatedToy => likeToy(updatedToy))
    .catch(error => console.error(error.message))
  }

  return (
    <li>
      <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeToy}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
      </div>
    </li>
  );
}

export default ToyCard;
