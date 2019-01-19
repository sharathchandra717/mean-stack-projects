const router = require('express').Router();

const connection = require('../MysqlConfig');

router.get('/',(req,res)=>{
    connection.query(`select * from answers`, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.json(results);
    });
});

module.exports = router;