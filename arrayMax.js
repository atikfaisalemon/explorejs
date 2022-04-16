 var marks = [1,2,3,4,5,6,7,8,9];
 var max = marks[0];

 for (var i=0; i<marks.length; i++){
     var element = marks[i];
     if (element > max){
        var max = element;

     }
 }
 console.log(max);