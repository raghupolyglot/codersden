var count =2;

var doIt = function ( i , callback ){
    if(i%2==0){
        console.log("passed even number here"+i);
        
    }else{
        callback("oh thsi is odd number try with even again");
    }
    console.log("now we are in the do it function "+i)
}

module.exports.doIt = doIt;

module.exports.foo = "test content";


