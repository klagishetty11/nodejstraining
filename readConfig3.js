const express = require("express");
const fs = require("fs").promises;
const app = express();
const port = 3002;
// Route with async error handling
app.get("/config",async(req,res,next) =>{
    try{
        const data = await fs.readFile("config.json", "utf8");
        res.status(200).json(JSON.parse(data));
    }catch(err){
        next(err);
    }
});
app.get("/auth",async(req,res,next) =>{
    try{
        const data = await fs.readFile("auth.json", "utf8");
        res.status(200).json(JSON.parse(data));
    }catch(err){
        next(err);
    }
});


// Centralized error handling middleware
app.use((err,req,res,next) => {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/config`);
    console.log(`Server is running at http://localhost:${port}/auth`);
});
