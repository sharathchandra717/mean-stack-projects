const express = require('express');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/theatres', (req, res) => {
    MongoClient.connect(url,{ useNewUrlParser: true } ,function(err, db) {
        if (err) throw err;
        var dbo = db.db("cinemaDB");
        dbo.collection("theatres").find({}).toArray((err, results) => {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.json({results});
            db.close();
        });
    });
});

app.get('/theatres/pincode', (req, res) => {
    // console.log(req.query.pincode);
    MongoClient.connect(url,{ useNewUrlParser: true } ,function(err, db) {
        if (err) throw err;
        var dbo = db.db("cinemaDB");
        dbo.collection("theatres").find({"pincode":req.query.num}).toArray((err, results) => {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.json({results});
            db.close();
        });     
    });
});

app.get('/theatres/cinema', (req, res) => {
    MongoClient.connect(url,{ useNewUrlParser: true } ,function(err, db) {
        if (err) throw err;
        var dbo = db.db("cinemaDB");
        dbo.collection("theatres").find({"movie_title":req.query.name}).toArray((err, results) => {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.json({results});
            db.close();
        });
    });
});

app.get('/theatres/booking', (req, res) => {
    // console.log(req.originalUrl);
    MongoClient.connect(url,{ useNewUrlParser: true } ,function(err, db) {
        if (err) throw err;
        var dbo = db.db("cinemaDB");
        dbo.collection("theatres").updateOne({'name' : req.query.theatre , "timings.time" : req.query.time }, {$inc : {"timings.$.available" : (parseInt(req.query.tickets))*(-1) } },false, function(err, result) {
            if (err) throw err;
            console.log(result.result);
            db.close();
        });
        
        let booking = 
        {
            day:req.query.day,
            phone_number: req.query.phno,
            show_time:req.query.time,
            movie_name:req.query.movie,
            theatre_name:req.query.theatre,
            no_of_tickets:req.query.tickets,
            booking_time:req.query.timeStamp
        };
        dbo.collection("bookings").insertOne(booking, function(err, result) {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.json(booking);
            db.close();
        });
    });
});

app.get('/',(req, res) => {
    res.send('Hello!');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));