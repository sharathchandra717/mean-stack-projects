const router = require('express').Router();

const connection = require('../MysqlConfig');

router.post('/',(req,res)=>{
    if(req.body.name != undefined && req.body.percentage != undefined){
        connection.query(`INSERT INTO results (Name, Percentage) VALUES ('${req.body.name}', '${req.body.percentage}')`, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            res.json({"result":results.affectedRows});
        });
    }
    else    res.json({"result":0})
    
});

module.exports = router;