var n=process.argv[2];
prime(n);
function prime(n) {
    let c=0;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            c+=1;
            break;
        }
    }
    if(c==0){
        console.log(n+" is Prime.");
    }
    else{
        console.log(n+" is not Prime.");
    }
}
