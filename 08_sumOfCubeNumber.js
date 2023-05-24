var sumOfCube=function(num){
var sum=0;
for(let index=1;index<=num;index++){

    sum=sum+index*index*index;
}

console.log(`sum is ${sum}`);

}
sumOfCube(5);






function oddPositionedChars(givenString){
      var str="";
      for(let index=0;index<givenString.length;index++ )
      {

        var char=givenString.charAt(index);
        if(index%2!=0 && char!=" "){
            str=str+char;
        }
      }
      console.log(`${str}`);}


      oddPositionedChars("Hard work always pays back");










