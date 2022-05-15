const express = require("express");
const router = express.Router();
const employeesDataModel = require("../models/employees")


/*  ---------------------------------------------  */
/*                  Add new employees              */
/*  ---------------------------------------------  */
router.post("/add-new-employee", async(req, res) => {
    
    new employeesDataModel({
    //  model      : body
        name       : req.body.name ,
        salary     : req.body.salary ,
        department : req.body.department ,
        attendance : req.body.attendance ,
        status     : req.body.status ,
        age        : req.body.age ,
    })
    .save()

    res.json({ data : req.body })
})




/*  ---------------------------------------------  */
/*                    get data                     */
/*  ---------------------------------------------  */
router.get("/", (req, res) => {
    res.send("Welcome to Node & Mongo Tutorial!!!")
})




module.exports = router;