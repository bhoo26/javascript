function stringBasics() {
    console.log("My dream company is Amazon");
}

stringBasics(); 

var hobby1="dancing";
var hobby2="cricket";
var hobby3="singing";
console.log("My hobbies are",hobby1,hobby2,hobby3);
var hobby1Length=hobby1.length;
var hobby2Length=hobby2.length;
var hobby3Length=hobby3.length;
var sum=hobby1Length+hobby2Length+hobby3Length;
console.log("sum of total characters are in hobbies",sum);

function stringHandsOn(){

var myString="  Hey you are doing good,keep it up   ";
console.log(myString);
var myStringLength=myString.length;
console.log("string length is ",myStringLength);

var trimedString=myString.trim();
var trimedStringLength=trimedString.length;
console.log("trimed string is", trimedString);
console.log("trimed string length is",trimedStringLength);
var totalExtraSpace=myStringLength-trimedStringLength;
console.log("totalnumber of extra spaces are",totalExtraSpace);

var charAtZeroIndex=trimedString.charAt(0);
var charAtLastIndex=trimedString.charAt(trimedStringLength-1)
console.log("char at zero index",charAtZeroIndex);
console.log("char at last index",charAtLastIndex);



}
stringHandsOn();
