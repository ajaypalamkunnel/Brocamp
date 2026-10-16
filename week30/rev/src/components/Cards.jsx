import React, { useEffect, useState } from "react";

const Cards = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    let response = fetch("https://jsonplaceholder.typicode.com/posts");

    response.then((result) => result.json()).then((data) => setPosts(data));
  };

  
  const [expand,setExpand] = useState(false)
  const [body,setBody] = useState("")

  const handleClick = (id) =>{

    setExpand(!expand)
    let postSeleted = posts.find((post)=>post.id === id)

    setBody(postSeleted.body)

  }
  
  useEffect(() => {
    getData();
  }, []);

  console.log(posts);
   return (
    <div style={{ padding: "20px" }}>
      <h1>Posts</h1>

      {expand && (
        <div
          style={{
            padding: "10px",
            background: "#f4f4f4",
            borderRadius: "8px",
            marginBottom: "15px",
            color:"red"
          }}
        >
          <p>{body}</p>
        </div>
      )}

      {/* Horizontal scroll section */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto",
          paddingBottom: "10px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              minWidth: "250px",
              padding: "15px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              flexShrink: 0,
            }}
          >
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "10px",
                color:"black"
              }}
            >
              {post.title}
            </h4>
            <button
              onClick={() => handleClick(post.id)}
              style={{
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                background: "#007bff",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Expand
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
