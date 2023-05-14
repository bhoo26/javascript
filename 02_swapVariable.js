var num1=100;
var num2=200;
console.log(num1,num2);
var num3;
num3 = num1;
num1=num2;
num2= num3;
console.log(num1,num2);

var num1=100;
var num2=200;
var num3=300;
console.log("before swap","num1",num1,"num2",num2,"num3",num3);
var num4;
num4 = num1;
num1=num2;
num2= num3;
num3=num4;
console.log("after swap","num1",num1,"num2",num2,"num3",num3);