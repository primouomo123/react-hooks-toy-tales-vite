import React, { useState } from "react";

function ToyForm({ addNewToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: ""
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newToy = {
      ...formData, likes: 0
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newToy)
    })
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {throw new Error("Failed to create new toy")}
    })
    .then(newData => {
      addNewToy(newData);
      setFormData(
        {
          name: "",
          image: ""
        }
      )
    })
  }

  const handleChange = (e) => {
    setFormData( previousData => (
      {
        ...previousData, [e.target.name]: e.target.value
      }
    ))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ToyForm;
