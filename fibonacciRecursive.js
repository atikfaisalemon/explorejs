function fibonacci(num){
if ( num == 0){
    return 0;
}
if ( num == 1){
    return 0;
}
else{
    return fibonacci(num-1)  + fibonacci(num-2);
}
}

var result = fibonacci(1);
console.log(result);