const express  = require("express")
const app = express();
const logger = require("morgan")
const bodyParser = require("body-parser")
const PORT = 4000




/*  ---------------------------------------------  */
/*                      Mongo DB                   */
/*  ---------------------------------------------  */
const DATABASE_URL = "mongodb://localhost:27017/employeeManagementSystem"

const mongoose = require ('mongoose');
mongoose.connect(DATABASE_URL)
const db = mongoose.connection;
db.on('error', err => console.error(err))
db.once('open',()  => {
  console.log('Connected Mongo')
})





/*  ---------------------------------------------  */
/*                    Middlewares                  */
/*  ---------------------------------------------  */
app.use(logger("dev"));
app.use(bodyParser.json())

const indexPage = require("./routes/index");
app.use("/", indexPage);




app.listen(PORT, () => {
    console.log("Server is running at Port: " + PORT);
})