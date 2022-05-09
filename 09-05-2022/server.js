const express = require("express")
const app = express();
const logger = require("morgan");
const PORT = 4000;


const path = require("path")
const multer = require("multer")
const filePath = "./public"

app.use(logger("dev"));


const StoreSystem = multer.diskStorage({
    destination: filePath,
    filename: function (req, file, cb) {
        cb(null, file.originalname.split(".")[0] + "_" + Date.now() + path.extname(file.originalname))
    }
})

const uploadMulter = multer({
    storage: StoreSystem
})

var Uploads = uploadMulter.fields([
    { name: 'cover1', maxCount: 1}, 
    { name: "cover2", maxCount: 3}
])

// Routes
app.get("/", (req, res) => {
    return res.send("DONE WOrKING")
})

app.post("/", Uploads, (req, res) => {
    console.log(req.file);
    console.log(req.body);

    return res.send("DONE WorKING")
})





app.listen(PORT, () => console.log(`Server is running at PORT => ${PORT}`))