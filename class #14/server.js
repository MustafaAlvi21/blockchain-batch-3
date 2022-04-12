const express = require("express")
const app = express()
const fs = require("fs")

const PORT = 4000
var JSONDATA = [
    {
        name: "Ayesha", 
        age: 18,
        image: "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        name: "Ahmed", 
        age: 25,
        image: "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        name: "Sana", 
        age: 18,
        image: "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        name: "Hasan", 
        age: 79,
        image: "https://reqres.in/img/faces/4-image.jpg"
    }
]
var textData = fs.readFileSync('readme.txt', "utf-8", (err, data) => {
    if (err) throw err;
    return data
});
console.log("-----------------------------------------");
console.log(textData);
console.log("-----------------------------------------");

data = `.p{ font-size: 25px}`
fs.writeFileSync(`./public/css/metadata.css`, data);

const bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static("public"))


app.get("/", function (req, res) {
    // route ki logic
    var textData = fs.readFileSync(`./public/css/metadata.css`, "utf-8", (err, data) => {
        if (err) throw err;
        return data
    });

    data = ` ${textData}

    h1{ 
        font-size: 25px;
        color: red;
    }
    body{
        background-color: gray;
    }
    `
    fs.writeFileSync(`./public/css/metadata.css`, data);
    
    
    res.send("file updated")
})

// delete file
app.get("/delete", (req, res) => {
    fs.unlinkSync(`./public/css/metadata.css`);
    res.send("File deleted")
})

app.get("/profile/:name", (req, res) => {
    // route ki logic

    data = JSONDATA.find(e => {
        return e.name == req.params.name
        
    })
    res.send(data) 
})

app.post("/home", (req, res) => {
    console.log(req.body);
    res.json(req.body)
})


// params example
app.get("/data/:name/:age/:id", (req, res) => {
    console.log(req.params);
    res.send(req.params)
})


// query example
app.get("/my-query", (req, res) => {
    console.log(req.query);
    res.send(req.query)
})


// post example
app.post("/postdata", (req, res) => {

})











app.listen(PORT, () => {
    console.log("server is running");
})