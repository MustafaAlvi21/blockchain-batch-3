module.exports = {
    test:function  (req, res, next){    
        console.log(req.query.admin);
        if ("Mustafa" !== req.query.admin){
            return res.redirect("/")
        } 
        next();
    }
}