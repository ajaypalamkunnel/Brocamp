import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    let handler = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [text]);

  return (
    <div>
      <h3>Debouncing Example</h3>

      <input
        type="text"
        placeholder="Type Something...."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h5>Input value: {text}</h5>
      <h4>Debounced Value aftet 500ms: {debouncedText}</h4>
    </div>
  );
};

export default Debouncing;
