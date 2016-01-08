var one = require('./one');

one.doIt(24, function(err,result){
    console.log(result);
});

console.log (one.foo);