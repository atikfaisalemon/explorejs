
    // simple function

    function goHome(){
        console.log(" I want to go home");
    }
    goHome();

    //  parameterize function
    function doubleIt(num){
        var result= num*2;
        console.log(result);
    }
    doubleIt(5);
    doubleIt(100);
    doubleIt(400);


    // return type
    function add(num1, num2){
        var result= num1+num2;
        return result;
    }

    var sum = add(150, 150);
    console.log(sum);
