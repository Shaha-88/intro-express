const express =require ("eppess");
const data =require('./data.js');
const app = express();

app.get("/api/products", (req,res) =>{
    console.log("");
    return res.json("lost of all products");
});



const PORT = 8000
app.lesten(PORT,()=>{
    console.log();
})