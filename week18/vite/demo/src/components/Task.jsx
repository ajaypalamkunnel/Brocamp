import React, { useState } from "react";

function Task() {
  const [formData, setFormData] = useState({
    number1: "",
    number2: "",
  });

  const [total, setTotal] = useState(0);

  function handleChange(eve) {
    const { name, value } = eve.target;
    setFormData({ ...formData, [name]: value });
  }

  console.log(formData.number1);

  function handleSubmit(eve) {
    eve.preventDefault();
    setFormData(formData);

    let num1 = parseFloat(formData.number1);
    let num2 = parseFloat(formData.number2);
    setTotal(num1 + num2);

    formData({ number1: "", number2: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Number1:
          <input
            name="number1"
            value={formData.number1}
            onChange={handleChange}
            type="number"
          />
        </label>
        <br />
        <label>
          Number2:
          <input
            name="number2"
            value={formData.number2}
            onChange={handleChange}
            type="number"
          />
        </label>

        <button onSubmit={handleSubmit}>Add</button>
      </form>

      <p>sum: {total && total}</p>
    </div>
  );
}

export default Task;
