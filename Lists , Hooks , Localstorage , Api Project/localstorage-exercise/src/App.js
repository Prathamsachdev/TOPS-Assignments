import React, { useState, useEffect } from "react";

const LocalStorageExample = () => {
  const [name, setName] = useState("");

  // Load the name from LocalStorage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const saveName = () => {
    localStorage.setItem("name", name);
    alert("Name saved to LocalStorage!");
  };

  return (
    <div>
      <h1>Hello, {name || "Guest"}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={saveName}>Save Name</button>
    </div>
  );
};

export default LocalStorageExample;
