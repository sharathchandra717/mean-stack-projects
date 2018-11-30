const http = require('http');
const fs=require('fs');
let fdata='';
http.createServer( (req, res) => {
  	
	if(req.url==='/Create' || req.url==='/create'){
        res.write("Creating and writing to a file.",fs.writeFile('sample.txt', 'The quick brown fox jumps over the lazy dog', 
                    (err)=>{
    					if (err) console.log(err);
    					console.log("File created successfully");
					}));
		res.end();
    }
    else if(req.url==='/Read' || req.url==='/read'){
        res.write("Reading a file : \n",fs.readFile('sample.txt', 'utf-8', 
                    (err, data)=>{
                        if (err) console.log(err);
                        else{
                            fdata=data;
                            console.log("File read successfully.");
                            res.end(fdata);
                        }
					}));
		//res.end(fdata);
	}
	else if(req.url==='/Update' || req.url==='/update'){
        res.write("Appending data to a file.",fs.appendFile('sample.txt', '\nFox is jumping again', 
                    (err, data)=>{
    					if (err) console.log(err);
    					console.log("File appended successfully.");
					}));
		res.end();
	}	
	else if(req.url==='/Delete' || req.url==='/delete'){
        res.write("Deleting the file content.",fs.writeFile('sample.txt','', 
                    (err)=>{
    					if (err) console.log(err);
    					console.log("File content deleted successfully.");
					}));
		res.end();
	}
    else{	
        res.write("<h1>CRUD operations</h1><br><h2>C - /Create</h2><br><h2>R - /Read</h2><br><h2>U - /Update</h2><br><h2>D - /Delete</h2>");
        res.end();
    }
}).listen(3000,()=>console.log("CRUD server started"));
