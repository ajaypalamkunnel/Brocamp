import React, { useEffect, useState } from "react";

const Form = () => {
  const data = [
    { country: "India", states: ["kerala", "Karnataka", "Delhi"] },
    { country: "USA", states: ["New York", "California"] },
    { country: "Australia", states: ["Sydney", "Melbon"] },
  ];

  const [selectedContry, setSelectContry] = useState();
  const [states, setState] = useState([]);

  useEffect(() => {
    let result = data.find((i) => i.country === selectedContry);
    setState(result?.states || []);
  }, [selectedContry]);

  console.log("-->", states);

  return (
    <div>
      <select name="" id="" onChange={(e) => setSelectContry(e.target.value)}>
        {data.map((item) => (
          <option value={item.country}>{item.country}</option>
        ))}
      </select>

      <h4>selected country : {selectedContry}</h4>

      <h4>states:</h4>

      {states.map((state, index) => (
        <p key={index}>{state}</p>
      ))}
    </div>
  );
};

export default Form;
