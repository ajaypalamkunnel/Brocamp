import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    age: "",
    sex: "male",
  });

  const [show,setShow] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    

  };

  return (
    <div>
      <form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Age:</label>
        <input type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}

         />
         <label>Place</label>
         <input type="text" 
         name="place"
         value={formData.place}
         onChange={handleChange}
         />
         <label>Sex:</label>
        <select name="sex" 
        value={formData.sex}
        onChange={handleChange}
        >
          <option value="male">Male</option>  
          <option value="female">Female</option>  
        </select>

        <button type="submit">submit</button>
      </form>


   

    </div>
  );
};

export default UserForm;
