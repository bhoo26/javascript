function VoteEligibility1(age){
    if (age==0 || age== undefined || age>120 || age<=0 || age==null) {
       console.log(`Invalid data: ${age}`); 
    } 
    else{
       if(age<18){
           console.log(`Not Elligible for vote: ${age}`); 
       }
       else{
           console.log(`Elligible for vote: ${age}`); 
       }
    }         
        }

        VoteEligibility1(45)
        VoteEligibility1(17)
        VoteEligibility1(8)
        VoteEligibility1(20)
VoteEligibility1(-10)
VoteEligibility1(200)
VoteEligibility1(0)
VoteEligibility1(undefined)
VoteEligibility1(null)