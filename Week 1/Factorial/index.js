var n=process.argv[2];
console.log("Factorial of "+n+" is "+fact(n));

function fact(n) {
    let f=1;
    for(let i=1;i<=n;i++){
        f*=i;
    }
    return f;
}
