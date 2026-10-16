import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dobouncedSearchTerm, setDobouncedSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDobouncedSearchTerm(searchTerm);
    }, 5000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (dobouncedSearchTerm) {
      console.log("Searching for:", dobouncedSearchTerm);
    }
  }, [dobouncedSearchTerm]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Debounced Search Example</h2>

      <input
        type="text"
        placeholder="Type of search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          borderRadius: "8px",
        }}
      />
      <p>Search term: {dobouncedSearchTerm}</p>
    </div>
  );
};

export default Search;
