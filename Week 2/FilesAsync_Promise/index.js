function copy( opfile,infile){
    const fs = require('fs');
    let prom = new Promise((resolve,reject)=>
    {
       fs.readFile(infile,function(error,data){
            if(error){
                reject(error);
            }
                resolve(data.toString());
        });
    });
    prom.then((fdata)=>{
        fs.appendFile(opfile,fdata+"\n",function(err){
           if(err) return console.log(err);
        });
    })
    .catch((error)=>{
        console.log(error);
    });
   
}

for (let i = 1; i <=10 ; i++) {
    copy('writeMe.txt','readMe'+i+'.txt');
}
