function randomNumber(){
    var num = Math.random()*6;
    var output = Math.round(num);
    return output;
}
var result = randomNumber();
console.log(result);

// for 10 times


    for( var i = 0; i<10; i++){
    var num = Math.random()*6;
    var output = Math.round(num);
    console.log(output);
    }
    

