import React from "react";

function ToyCard({ id, name, image, likes, donateToy }) {
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
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
      </div>
    </li>
  );
}

export default ToyCard;
