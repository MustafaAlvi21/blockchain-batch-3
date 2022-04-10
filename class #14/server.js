const express = require("express")
const app = express()

const PORT = 4001
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


app.get("/", (req, res) => {
    // route ki logic
    res.send(JSONDATA) 
})

app.get("/profile/:name", (req, res) => {
    // route ki logic

    data = JSONDATA.find(e => {
        return e.name == req.params.name
        
    })
    res.send(data) 
})

app.listen(PORT, () => {
    console.log("server is running");
})