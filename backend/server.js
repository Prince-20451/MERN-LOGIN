const express = require("express");

const app = express();

const PORT = 3000;


app.use(express.json(), (req, res, next) => {

    const start = Date.now();

    next();

    const end = Date.now();

    console.log(`Time Taken: ${end - start} ms`);

});

app.get('/',(req, res)=>{
    console.log("A");

    console.log("B");

    res.send("Hello");

    console.log("C");;
});


app.get('/user/:name/:age', (req, res)=>{
    res.send(`hello ${req.params.name}. your age is ${req.params.age}`);
});

app.get('/about', (req, res)=>{
    res.send("my about page");
});

app.get('/contact', (req, res)=>{
    res.send("my contact page");
});

app.get("/search", (req, res) => {
    // console.log(req.query);
    res.send(req.query);
});

app.post("/login", (req, res)=>{
    console.log(req.body);
    res.send("login API")
});

app.get("/product", (req, res)=>{
    res.send(`
        Product: ${req.query.name}
        Age: ${req.query.age}
        `);
});

app.listen(PORT, ()=>{
    console.log("server is running...");
});