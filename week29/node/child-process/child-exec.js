const { exec } = require("child_process");


exec("node -v", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  if(stderr){
     console.error(`Stderr: ${stderr}`);
    return;
  }

  console.log(`Node Version: ${stdout}`);
});
