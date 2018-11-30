const express=require('express');
const app=express();
var fs=require('fs');

app.get('/',(req,res)=>{
    res.send("<h1>CRUD operations using Express</h1><br><h2>C - /Create</h2><br><h2>R - /Read</h2><br><h2>U - /Update</h2><br><h2>D - /Delete</h2>");
});

//GET operation to write a file
app.get('/Create',(req,res)=>{fs.writeFile('Sample.txt', 'The quick brown fox jumps over the lazy dog', 
                    (err)=>{
    					if (err) console.log(err);
					});
		res.send("GET : File created successfully\n");
});

//GET operation to read a file
app.get('/Read',(req,res)=>{fs.readFile('Sample.txt', 'utf-8', 
                    (err, data)=>{
    					if (err) console.log(err);
                        res.end(data);
					})		
		res.write("GET : File read successfully.\n ",);	
});

//POST operation to append content 
app.post('/Post',(req,res)=>{
		
        fs.appendFile('Sample.txt', '\nFox is jumping again', 
                    (err)=>{
    					if (err) console.log(err);
					});
		res.send("POST : File appended successfully. \n");
	
});

//PUT operation to update a file
app.put('/Put',(req,res)=>{
        fs.writeFile('Sample.txt', 'Fox updated', 
                    (err)=>{
    					if (err) console.log(err);
					});
		res.send("PUT : File updated successfully.\n");
});

//DELETE operation to delete content from a file
app.delete('/Delete',(req,res)=>{
        fs.writeFile('Sample.txt','', 
                    (err, data)=>{
    					if (err) console.log(err);
					});
		res.send("DELETE : File content is deleted Successfully");
	
});

app.listen(3000,()=> {console.log("CRUD server started");});