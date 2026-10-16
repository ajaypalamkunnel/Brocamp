import React, { useState } from "react";

function UserInfo() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    place: "",
    gender: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const [errors,setErrors] = useState({})

  function handleChange(event) {
    const {name,value} = event.target;
    setFormData({...formData,[name]:value});

  }

  function formValidation(){
    const newErrors = {}

    if(!formData.name.trim()){
      newErrors.name = "Name is required."
    }

    if(!formData.age || isNaN(formData.age) || formData.age <= 0){
      newErrors.age = "Please enter a valid age greater than 0."
    }
    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(event) {
      event.preventDefault();
      if(formValidation()){
        setSubmittedData(formData);
        setFormData({ name: "", age: "", place: "", gender: "" })
        setErrors({})
      }
  }

  return (
    <div>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h2>Simple Form Example</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              style={{ margin: "10px 0", padding: "5px", width: "100%" }}
              placeholder="Enter your name"
            />
          </label>
          {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}

          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{ margin: "10px 0", padding: "5px", width: "100%" }}
              placeholder="Enter your age"
            />
          </label>
          {errors.age && <p style={{ color: "red", fontSize: "12px" }}>{errors.age}</p>}

          <label>
            Place:
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              style={{ margin: "10px 0", padding: "5px", width: "100%" }}
              placeholder="Enter your place"
            />
          </label>
          {errors.place && <p style={{ color: "red", fontSize: "12px" }}>{errors.place}</p>}

          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{ margin: "10px 0", padding: "5px", width: "100%" }}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          {errors.gender && <p style={{ color: "red", fontSize: "12px" }}>{errors.gender}</p>}
          <button type="submit" style={{ padding: "5px 10px" }}>
            submit
          </button>
        </form>

        {submittedData && (
          <div style={{ marginTop: "20px", color: "green" }}>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Age:</strong> {submittedData.age}
            </p>
            <p>
              <strong>Place:</strong> {submittedData.place}
            </p>
            <p>
              <strong>Gender:</strong> {submittedData.gender}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
