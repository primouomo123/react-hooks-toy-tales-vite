import React from "react";

function ToyCard({ id, name, image, likes }) {
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
      <button className="del-btn">Donate to GoodWill</button>
      </div>
    </li>
  );
}

export default ToyCard;
