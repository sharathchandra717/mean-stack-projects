let a=process.argv.slice(2);
console.log("Max element is:"+max(a));
console.log("Min element is:"+min(a));
function max(a) {
    let max=a[0];
    for(let i=1;i<a.length;i++){
        if(parseInt(max) < parseInt(a[i])){
            max=a[i];
        }
    }
    return max;
}
function min(a) {
    let min=a[0];
    for(let i=1;i<a.length;i++){
        if(parseInt(min) > (a[i])){
            min=a[i];
        }
    }
    return min;
}
