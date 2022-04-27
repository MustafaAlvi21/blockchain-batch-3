const router = require("express").Router()

// File System
const fs = require("fs");

// DB Path
const db = "./public/db/db.json"

const { onlyAdmin } = require("../middleware/firstMiddleware");


router.get("/", (req, res) => {
    res.send("Welcome to Home!!!")
})

router.get("/read-db", onlyAdmin, (req, res) => {
    data = JSON.parse(fs.readFileSync(db, "utf-8"))    
    res.json(data)
})


module.exports = router;