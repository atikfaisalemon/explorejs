function factorial(num){
    var factorial = 1;
    for(i=1; i<=num; i++){
        var factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(7);
console.log(result);