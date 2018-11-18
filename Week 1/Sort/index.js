let a=process.argv.slice(2);
if(a==null || a.length==0)
    console.log("Empty Array.");
else{
    console.log("Before Sorting: "+a);
    a=sort(a);
    console.log("After Sorting: "+a);
}

function sort(a) {
    for (let i = 0; i <a.length ; i++) {
        for (let j = 0; j <a.length-1 ; j++) {
            if(parseInt(a[j])>parseInt(a[j+1])){
                a[j] = parseInt(a[j]) + parseInt(a[j+1]) - parseInt(a[j+1] = a[j]);
            }
        }
    }
    return a;
}
        