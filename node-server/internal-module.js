var os = require('os');

var toMb = function(f){
    return (Math.round((f/1024/1024)*100)/100);
}

console.log('host name ' + os.hostname());
console.log('15 min load average :'+ os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' MB of '+ os.totalmem() + ' of total mb ;');