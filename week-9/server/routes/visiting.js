const router = require('express').Router();
// const visiting = require("../models/visiting");
const knex = require('../knex');

router.get('/',(req,res)=>{
    // visiting.where({'username':req.query.user}).fetchAll().then((visit) => {
    //     // console.log(visit.length);
    //     if(visit.length > 0)
    //         res.json({
    //             result:"found",
    //             data:visit
    //         });
    //     else 
    //         res.json({result:"no details found"});
    // });
    knex.raw(`SELECT h.area_name,v.date,v.h_id,u.name,h.hname,h.nbhk,h.price,h.sqryards FROM visiting v 
    INNER JOIN houses h ON h.id = v.h_id 
    INNER JOIN users u ON v.username = u.username and v.username= '${req.query.user}'
    `).then((result)=>{
        res.json(result[0]);
    }).catch((err) => {
         console.log( err); 
         throw err 
    });
});

router.get('/book',(req,res)=>{
    knex.raw(`INSERT INTO visiting(username,h_id,date) 
    VALUES ('${req.query.user}','${req.query.id}','${req.query.date}') `).then((result)=>{
        if(result[0].affectedRows==1){
            res.json({result:result[0].affectedRows});
        }
        else{
            res.json({result:0});
        }
    }).catch((err) => {
        res.json({result:0});
        //  console.log( err); 
         throw err 
    });
});
module.exports = router;