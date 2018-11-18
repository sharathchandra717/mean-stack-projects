let k=process.argv[2];
let a=process.argv.slice(3);
let c=search(a,k);
if(c!=-1){
    console.log(k+" found at "+c);
}
else{
    console.log("Element not found.");
}

function search(a,k) {
    for(let i=0;i<a.length;i++){
        if(parseInt(a[i])==k){
            return i+1;
        }
    }
    return -1;
}