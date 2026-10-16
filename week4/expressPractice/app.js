import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Render the index.ejs file when the root route is accessed
app.get('/', (req, res) => {
    res.render('index',{msg:"hi guyssss"}); // No need to specify .ejs, as the view engine is already set to EJS
});

app.get('/users/:id/:username',(req,res)=>{
    let {id}=req.params
    let {username} = req.params 

    res.send(`Username: ${username} Id : ${id}`)


})

// Start the server on port 4000
app.listen(4000, () => {
    console.log('App running on port 4000');
});
