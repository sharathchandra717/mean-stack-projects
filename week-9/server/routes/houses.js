const router = require('express').Router();
const houses = require("../models/houses");

router.get('/',(req,res)=>{
    houses.fetchAll().then((house) => {
        res.json(house);
    });
});

module.exports = router;