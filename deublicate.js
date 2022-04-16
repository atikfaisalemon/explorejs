var num = [30,54,67,23,54,87,90,93,45,6,6,77,88,23,45,67,87,87,90,88,44];
var unicName = [];

for(var i=0; i<num.length; i++){
    var element = num[i];
    var index = element.indexOf(element);
    if(index == -1){
        unicName.push(element);
    }
}
console.log(unicName);
console.log(num);