const express =  require("express");
const app = express()
const bodyParser = require("body-parser")
const PORT = 3000
const logger = require("morgan");



// File System
const fs = require("fs");

// DB Path
const db = "./public/db/db.json"

// middlewares
app.use(bodyParser.json())
app.use(logger("dev"))


const firstRouteFile = require("./routes/index")
app.use("/home", firstRouteFile)

const apiRouteFile = require("./routes/api")
app.use("/api", apiRouteFile)


// Routes
app.get("/find-db/:name", (req, res) => {
    let data = JSON.parse(fs.readFileSync(db, "utf-8"))    
    const name = req.params.name;

    founddata = data.find(user => {
        return user.name == name
    })

    console.log(typeof founddata);

    res.json( typeof founddata !== "undefined" ? founddata : "User not found")
})

app.get("/update-user/:name", (req, res) => {
    let data = JSON.parse(fs.readFileSync(db, "utf-8"))  
    updatedData = []

    // searching user
    data.forEach((user, i) => {
        if (user.name == req.params.name){
            updatedData = [user, i]
            return true
        } 
    })

    // validating user found or not
    if(updatedData.length > 0){

        console.log("updatedData");
        console.log(updatedData);
        

        // now updating user name if required
        if(typeof req.query.n !== "undefined"){
            data[updatedData[1]].name = req.query.n
        }
        
        // now updating user password if required
        if(typeof req.query.p !== "undefined"){
            data[updatedData[1]].pass = req.query.p
        }

        fs.writeFileSync(db, JSON.stringify(data));

    }

    res.json(updatedData.length > 0 ? {msg: "Data updated", data: updatedData[0] } : "User not found")
})


app.listen(PORT, () => {
    console.log("Server is running at port: " + PORT);
})