let n=process.argv[2];
fibo(n);

function fibo(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 0; i < n; i++) {
        console.log(a+"");
        f = a + b;
        a = b;
        b = f;
    }
}