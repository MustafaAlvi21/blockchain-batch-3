const router = require("express").Router();
const axios = require("axios");



// fetching data
router.get("/fetch-from-api", async(req, res) => {

    const Body = {
        "name": "Mustafa", 
        "id": 6130
    }
    // axios.post("http://localhost:3000/api/postapi", {
    //     "name": "Mustafa", 
    //     "id": 6130
    // })
    // .then( response => {
    //     console.log(response)
    //     return res.json(response.data)

    // })
    // .catch( err => {
    //     console.log(err);
    //     return res.json(err)
    // })

    const res123 = await axios.get('https://httpbin.org/get', {
        headers: {
            'Test-Header': 'test-value'
        }
    });

    console.log(res123.data.headers['Test-Header'])
})

// POST
router.post("/postapi", (req, res) => {
    return res.json(req.body)
})


module.exports = router;