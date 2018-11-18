let a=process.argv[2],b=process.argv[3];

if(b==0){
    console.log("Cant divide by zero");
}
else
    console.log("Division = "+div(a,b));  
    
function div(a,b) {
    return a/b;
}