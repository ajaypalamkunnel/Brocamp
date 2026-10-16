import React, { useState } from "react";

const Registration = () => {
  const [formData, setData] = useState({
    username: "",
    age: "",
  });
  const [submit, setSubmit] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);

    setData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <input
          name="username"
          value={formData.name}
          onChange={handleChange}
          type="text"
        />
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
        />
        <button>submit</button>
      </form>

      {submit && (
        <div>
          <h1>FormData</h1>
          <p>Name: {formData.username}</p>
          <p>Age: {formData.age}</p>
        </div>
      )}
    </div>
  );
};

export default Registration;
