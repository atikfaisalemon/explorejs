var sectance = "I am a good web devloper";
var count = 0;
console.log(sectance);
for(var i = 0; i<sectance.length; i++){
    var char = sectance [i];
    if(char == " "){
        count++;
    }
}
count++;
console.log(count);