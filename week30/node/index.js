const express = require("express");
const os = require("os")

const app = express();

console.log(os.cpus().length)

app.get("/data", async (req, res) => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  let start = new Date().getSeconds();
  let end = new Date().getSeconds()+10;
  console.log(end)

  while (start <= end) {
    start = new Date().getSeconds()
  }
  res.status(200).json({ message: "Data featch successfully", data });
});

app.listen(3009, () => {
  console.log("server running on port 3000");
});
