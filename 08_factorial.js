let factorial=1;
for(let index=5;index>=1;index--){

    factorial=factorial*index;
}
console.log(`factorial is ${factorial}`);






function factorialNum(num)
{
if(num==1){
    console.log(`factorial of zero is 1`);
}
let factorial=1;
for(let index=num;index>=1;index--){

    factorial=factorial*index;
}
console.log(`factorial is ${factorial}`);

}


factorialNum(7);
