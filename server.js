import express from "express";
import sum from "./sum.js";

const app = express();
const port =  8080;

app.listen(port , ()=>{
    console.log("server listing to PORT : " + port);
});

app.get("/home" , async(req , res) => {
    res.json({
        msg : "Hi I am root!"
    })
});

app.get("/sum/:a/:b" , async( req , res )=>{
    const{a, b} = req.params;
    res.json({
        ans : sum(parseInt(a) , parseInt(b))
    })
});