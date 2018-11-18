function copy() {
    const fs = require('fs'); 
    for (let i = 1; i <= 10; i++) {
        fs.readFile("readMe"+i+".txt","utf8",function(err,data) {
            if (err) throw err;
            fs.appendFile("writeMe.txt",data+"\n", function (err) {
                if (err) throw err;
              });               
        });
    }
       
}

copy();

//Output:(in writeMe.txt)
