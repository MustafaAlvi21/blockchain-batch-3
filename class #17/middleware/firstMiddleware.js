module.exports = {
    onlyAdmin: function (req, res, next) {
        if ("admin123" !== req.query.adminpass) {
            return res.redirect("/home");
        }
    
        next()
    }
}