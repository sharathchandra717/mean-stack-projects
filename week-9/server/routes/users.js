const router = require('express').Router();
const users = require("../models/users");

router.post('/',(req,res)=>{
    users.where({
            'username': req.body.username,
            'password':req.body.password
        })
        .fetch().then(
            (user) => {
                if(user === null)
                    res.json({result:"authentication failed"});
                else{
                    res.json({
                        result:"successful",
                        uname:user.attributes.username,
                        name:user.attributes.name
                    });
                }
        }).catch(function(err) {
            console.error(err);
    });
});

module.exports = router;