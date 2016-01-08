var count =2;

var doIt = function ( i , callback ){
    console.log("now we are in the do it function "+i)
}

module.exports.doIt = doIt;

module.exports.foo = "test content";


