const { spawn } = require("child_process");

// Correct: command = "npm", args = ["i", "lodash"]
const child = spawn("npm", ["i", "lodash"],{shell:true});

child.stdout.on("data", (data) => {
  console.log(`Output: ${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`Error: ${data}`);
});

child.on("close", (code) => {
  console.log(`Process exited with code ${code}`);
});
