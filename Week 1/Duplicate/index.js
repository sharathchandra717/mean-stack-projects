let a=process.argv.slice(2);
dup(a);

function dup(a) {
    let count=0;
    for(let i=0;i<a.length;i++) {
        for(let j =i+1;j<a.length;j++) {
            if(a[i]==a[j]) {
                count++;
            }
        }
        if(count == 1)
            console.log(a[i]);
        count = 0;
    }
} 
    